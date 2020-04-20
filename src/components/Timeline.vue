<template>
<div style="padding:32px">

    <q-infinite-scroll @load="onLoad" :offset="50" ref="infinite_scroll">

        <!--Timeline-->
        <q-timeline color="secondary" :layout="layout">

            <!--Titolo-->
            <q-timeline-entry heading>
                Your Story.
            </q-timeline-entry>

            <!--Oggi-->
            <q-timeline-entry v-if="canExploreToday">
              <template v-slot:title>
                  Today
              </template>
              <template v-slot:subtitle>
                  April 17, 2020
              </template>

              <div>
                  <q-btn color="primary" @click="$router.push({ name: 'express'})">Let's do it</q-btn>
              </div>
            </q-timeline-entry>

            <!--Mese-->
            <q-timeline-entry heading>
                November, 2017
            </q-timeline-entry>

            <event
            v-for="event in events"
            :key="event.id"
            :heading="'cane'"
            :event="event"></event>

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
import Event from './Event'
import utils from '../utils'
export default {
    components: {
      Event
    },
    data() {
        return {
            lastVisible: null,
            events: []
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
            getColorById: 'data/getColorById'
        }),

        canExploreToday() {
          return true;
          return !this.events.some(x => 
          x.instant.toDate().setHours(0, 0, 0, 0) == new Date().setHours(0,0,0,0));
        },

        layout() {
          return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    },
    methods: {

    },
    mounted() {
    },
    methods: {
        onLoad(page, done) {
          
          var myDone = done;
          console.log('#### PAGE: [' + page + '] #####')
          
          this.$db
              .collection('events')
              .where('userId', '==', this.user.uid)
              .orderBy('instant', 'desc')
              .startAfter(this.lastVisible || {})
              .limit(5)
              .get()
              .then((documentSnapshots) => {

                  let batch = [];
                  documentSnapshots.forEach((doc) => {
                      const event = doc.data();
                      event.id = doc.id;
                      this.events.push(event);
                      batch.push(event.id)
                  });

                  this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
                  console.log("last", this.lastVisible);

                  let stop = (batch.length === 0);

                  done(stop);
              });

        }
    }
}
</script>

<style scoped>
</style>
