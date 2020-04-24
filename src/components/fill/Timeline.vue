<template>
<div>

    <!--Skeleton-->
    <div v-if="skeleton" class="full-width full-height text-center align-center">

        <q-circular-progress size="50px" color="primary" indeterminate class="q-ma-md" />

    </div>

    <!--Welcome-->
    <div v-else-if="welcome" class="motivation-header items-center q-mt-xl">

        <div class="column justify-center items-center">

            <img :src="'/statics/undraw_palette.svg'" style="max-height: 30vh" />

            <div class="text-h3 text-center text-primary text-bold q-mt-xl">Heya stranger, welcome.</div>
            <div class="text-h5 text-center text-primary q-mt-sm">This is where your story will take place.</div>
            <div class="text-h5 text-center text-primary q-mt-sm">You are all set, ready to begin?</div>

            <!--GO-->
            <q-btn class="q-mt-lg" color="primary" @click="explore">
                LET'S DO IT
            </q-btn>
        </div>
    </div>

    <q-infinite-scroll v-else @load="onLoad" :offset="50" class="q-pa-xl" ref="infinite_scroll">

        <!--Timeline-->
        <q-timeline color="secondary" :layout="layout">

            <!--Titolo-->
            <q-timeline-entry heading>
                Your Story.
            </q-timeline-entry>

            <!--Oggi-->
            <q-timeline-entry v-if="!anyEntryToday">
                <template v-slot:title>
                    Today
                </template>
                <template v-slot:subtitle>
                    Now
                </template>

                <div>
                    <div class="text-body2">Looks like you haven't choose a color today</div>
                    <div class="text-body2">Ready to pick one?</div>
                    <q-btn color="primary" class="q-mt-md" @click="explore">Let's do it</q-btn>
                </div>
            </q-timeline-entry>

            <!--Append at today-->
            <q-timeline-entry v-else>
                <template v-slot:title>
                    Today
                </template>
                <template v-slot:subtitle>
                    Now
                </template>

                <div>
                    <div class="text-body2">Feeling like exploring some more?</div>
                    <div class="text-body2">No problem, just pick another color</div>
                    <q-btn color="primary" class="q-mt-md" @click="explore">PICK</q-btn>
                </div>
            </q-timeline-entry>

            <component v-for="(event, idx) in events" :key="idx" :is="(event.isGroup ? 'TimeGroup' : 'Event')" :group="event" :event="event"></component>

        </q-timeline>

        <!--Loading-->
        <template v-slot:loading>
            <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
            </div>
        </template>
    </q-infinite-scroll>

</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Event from '../kit/Event'
import TimeGroup from '../kit/TimeGroup'
export default {
    components: {
        Event,
        TimeGroup,
    },
    data() {
        return {
            lastVisible: null,
            lastGroup: false,
            events: [],

            welcome: false,
            skeleton: true,

            dialog: {
                show: false,
                dude: {}
            }
        }
    },
    computed: {
        ...mapGetters({
            me: 'auth/me',
            getColorById: 'data/getColorById'
        }),

        anyEntryToday() {
            return this.events.some(x =>
                x.day == new Date().setHours(0, 0, 0, 0));
        },

        layout() {
            return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    },
    methods: {

    },
    mounted() {
        // Check if it's the first time
        this.checkWelcome().then((val) => {
            console.log('welcome:', val)
            this.welcome = val;
            this.skeleton = false;
        })

        // this.$root.$on('request-show-dude-info', (dude) => {
        //     this.dialog.show = true;
        //     this.dialog.dude = dude
        // })

    },
    methods: {
        onLoad(page, done) {

            console.log('#### PAGE: [' + page + '] #####')

            this.$db
                .collection('events')
                .where('userId', '==', this.me.userId)
                .orderBy('instant', 'desc')
                .startAfter(this.lastVisible || {})
                .limit(5)
                .get()
                .then((documentSnapshots) => {

                    let batch = [];
                    documentSnapshots.forEach((doc) => {
                        const event = doc.data();
                        event.id = doc.id;

                        // Insert group?
                        let group = this.$utils.getTimelineGroup(event.instant)
                        if (group != this.lastGroup) {
                            this.events.push({
                                isGroup: true,
                                groupName: this.$utils.getTimelineHumanGroupName(event.instant)
                            })

                            this.lastGroup = group;
                        }

                        this.events.push(event);

                        batch.push(event.id)
                    });

                    // Extact last visible to paginate the next request
                    this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

                    let stop = (batch.length === 0);

                    done(stop);
                });

        },

        checkWelcome() {

            return new Promise((resolve, reject) => {

                this.$db
                    .collection('events')
                    .where('userId', '==', this.me.userId)
                    .limit(1)
                    .get()
                    .then((documentSnapshots) => {

                        let batch = [];
                        documentSnapshots.forEach((doc) => {
                            const event = doc.data();
                            event.id = doc.id;
                            batch.push(event.id)
                        });

                        let any = batch.length > 0

                        resolve(!any)
                    });

            })

        },

        explore() {
            this.$router.push({
                name: 'browse'
            })
        }
    }
}
</script>

<style scoped>
</style>
