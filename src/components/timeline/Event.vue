<template>
<q-timeline-entry :color="'aroma-' + color.id">

    <!--Titolo-->
    <template v-slot:title>
        <div class="row">
            <div class="circle q-mr-md" :style="{'background-color': color.hex }" v-if="false"></div>
            {{ color.name }}
        </div>
    </template>

    <!--Data-->
    <template v-slot:subtitle>
        {{ humanDate }}
    </template>

    <!--Categorie-->
    <div>
        <q-btn style="cursor:default !important" v-for="cat in cats" :key="cat.id" flat round :size="'md'" :icon="cat.icon" :style="{
                'color': ($q.config.brand.primary) }">
            <q-tooltip :content-style="{'font-size': '16px'}">
                {{ cat.name }}
            </q-tooltip>
        </q-btn>
    </div>

    <!--Confession-->
    <div class="q-pl-sm">
        <div v-if="event.confession" class="text-body2">
            {{ event.confession }}
        </div>
    </div>

    <!--Newbies-->
    <div class="q-mt-md" v-if="anyNewbie">
        <div class="text-subtitle1">New buddies</div>
        <q-card class="my-card justify-start">
            <div v-for="(dude, idx) in newbies" :key="idx">
                <q-item>
                    <q-item-section avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label><span class="text-bold">78%</span> affinity</q-item-label>
                        <q-item-label caption>@{{ dude.displayName }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator></q-separator>
            </div>

        </q-card>
    </div>

    <!--Oldies-->
    <div class="q-mt-md" v-if="anyOldie">
        <div class="text-subtitle1">Your buddies</div>
        <q-card class="my-card justify-start">
            <div v-for="(dude, idx) in oldies" :key="idx">
                <q-item>
                    <q-item-section avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label><span class="text-bold">78%</span> fffinity</q-item-label>
                        <q-item-label caption>@username</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator></q-separator>
            </div>

        </q-card>
    </div>

</q-timeline-entry>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            newbies: [],
            oldies: []
        }
    },
    mounted() {
        this.getNewbies();
    },
    computed: {
        ...mapGetters({
            getColorById: 'data/getColorById',
            getCatsByIds: 'data/getCatsByIds',
            me: 'auth/me'
        }),

        humanDate() {
            return this.$utils.formatTimestampFull(this.event.instant);
        },

        color() {
            return this.getColorById(this.event.colId)
        },

        contrastingColor() {
            return this.$utils.getContrastingColor(this.color)
        },

        cats() {
            return this.getCatsByIds(this.event.catIds)
        },

        anyNewbie() {
            return this.newbies.length > 0
        },

        anyOldie() {
            return this.oldies.length > 0
        }

    },
    methods: {
        getNewbies() {

            // Retrieve all events of days
            // of dudes that picked the same color as yours
            this.$db
                .collection('events')
                //.where('userId', '!=', this.me.userId) // Firestore doesn't allow inequality checks
                .where('colId', '==', this.event.colId)
                .where('day', '==', this.event.day)
                .limit(4) // Note: one will always be you
                .get()
                .then((docs) => {

                    docs.forEach((doc) => {
                        const event = doc.data();

                        if (event.userId !== this.me.userId) {
                            console.log('it\'s someone else');

                            // Recupero utente
                            this.getDudeById(event.userId)
                                .then((dude) => {

                                    if (this.me.buddyIds.some(x => x == dude.userId)) {
                                        // Oldie
                                    } else {
                                        // Newbie
                                        console.log('===>', dude);
                                        this.newbies.push(dude)
                                    }

                                })
                                .catch((error) =>
                                    throw error)

                        
                        
                        } else {
                            // It's me, mario
                        }
                    })

                })

        },

        getDudeById(id) {
            return new Promise((resolve, reject) => {
                this.$db
                    .collection('dudes')
                    .doc(id)
                    .get()
                    .then((doc) => {

                        if (doc.exists) {
                            resolve(doc.data())
                        } else {
                            reject()
                        }
                    })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.my-card {
    width: fit-content;
}
</style>
