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

    <!--Dudes-->
    <div class="q-mt-md" v-if="anyDude">
        <div class="text-subtitle1">Your buddies</div>
        <q-card class="my-card">
            <dude v-for="(dude, idx) in dudes" 
            :key="idx" 
            :dude="dude" 
            :event="event"></dude>
        </q-card>
    </div>


</q-timeline-entry>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Dude from './Dude'
export default {
    components: {
        Dude,
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            dudes: [],
        }
    },
    mounted() {
        this.getDudesOfEvent();
    },
    computed: {
        ...mapGetters({
            getColorById: 'data/getColorById',
            getCatsByIds: 'data/getCatsByIds',
            getAffinity: 'data/getAffinity',
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

        anyDude() {
            return this.dudes.length > 0
        },

    },
    methods: {
        getDudesOfEvent() {

            const REQUESTED_AFFINITY = 100;

            // Retrieve all events of this day
            // of dudes that picked the same color as yours (or a close one)
            this.$db
                .collection('events')
                //.where('colId', '>=', this.event.colId - REQUESTED_AFFINITY)
                //.where('colId', '<=', this.event.colId + REQUESTED_AFFINITY)
                .where('day', '==', this.event.day)
                //.limit(4) // Note: one will always be you
                .get()
                .then((docs) => {

                    docs.forEach((doc) => {
                        const event = doc.data();

                        // Check if the event belongs to me
                        // or to someone else
                        // NB: This check has to be done client-side
                        // b/c Firestore doesn't support inequality comparison
                        if (event.userId !== this.me.userId) {

                            let hisColor = this.getColorById(event.colId);
                            let affinity = this.getAffinity(hisColor, this.color);

                            if (affinity > 0.85 && this.dudes.length < 10) {
                            
                                // Retrieve user of this event
                                this.getDudeById(event.userId).then((dude) => {
                                        
                                        // Extend with the color id he choosed
                                        dude['colId'] = event.colId;

                                        this.dudes.push(dude);

                                    })
                                    .catch((error) => {
                                        console.error('Dude with id' + event.userId + ' not found in firestore')
                                    })
                            }

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
        },
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
