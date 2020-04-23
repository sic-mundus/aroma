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
            <newbie v-for="(dude, idx) in newbies" :key="idx" :dude="dude" @request-add-buddy="add2Buddies"></newbie>
        </q-card>
    </div>

    <!--Buddies-->
    <div class="q-mt-md" v-if="anyBuddy">
        <div class="text-subtitle1">Your buddies</div>
        <q-card class="my-card justify-start">
            <buddy v-for="(dude, idx) in buddies" :key="idx" :dude="dude" @request-add-buddy="add2Buddies"></buddy>

        </q-card>
    </div>

</q-timeline-entry>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Newbie from './Newbie'
import Buddy from './Buddy'
export default {
    components: {
        Newbie,
        Buddy
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            newbies: [],
            buddies: []
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

        anyBuddy() {
            return this.buddies.length > 0
        }

    },
    methods: {
        getNewbies() {

            const REQUESTED_AFFINITY = 20;
            // Retrieve all events of this day
            // of dudes that picked the same color as yours (or a close one)
            this.$db
                .collection('events')
                .where('colId', '>=', this.event.colId - REQUESTED_AFFINITY)
                .where('colId', '<=', this.event.colId + REQUESTED_AFFINITY)
                .where('day', '==', this.event.day)
                .limit(4) // Note: one will always be you
                .get()
                .then((docs) => {

                    docs.forEach((doc) => {
                        const event = doc.data();

                        // Check if the event belongs to me
                        // or to someone else
                        // NB: This check has to be done client-side
                        // b/c Firestore doesn't support inequality comparison
                        if (event.userId !== this.me.userId) {

                            // Retrieve user of this event
                            this.getDudeById(event.userId).then((dude) => {

                                    if (this.me.buddyIds.some(x => x == dude.userId)) {
                                        // Oldie
                                        // This dude is already in your buddies list

                                    } else {
                                        // Newbie
                                        // This is a new connection!
                                        console.log('pushing', dude)
                                        this.newbies.push(dude)
                                    }

                                })
                                .catch((error) => {
                                    console.error('Dude with id' + event.userId + ' not found in firestore')
                                })

                        } else {
                            // It's me, mario
                        }
                    })

                })

        },

        getBuddies() {

            let myBuddiesIds = this.me.buddyIds;

            this.$db
                .collection('dudes')
                .where('userId', 'in', myBuddiesIds)
                .get()
                .limit(3)
                .then((docs) => {

                    docs.forEach((doc) => {

                        let dude = doc.data();
                        console.log('found a friend');

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
        },

        add2Buddies(dude) {

            let myBuddies = [...this.me.buddyIds];
            myBuddies.push(dude.userId);

            this.$db
                .collection('dudes')
                .doc(this.me.userId)
                .set({
                    buddyIds: myBuddies
                }, { merge: true })
                .then(() => {

                    // Remove from newbies
                    this.newbies = this.newbies.filter(x => x.userId !== dude.userId)

                    // Add to buddies
                    if (!this.buddies.some(x => x.userId == dude.userId)) {
                        this.buddies.push(dude)
                    }

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
