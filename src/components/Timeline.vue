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
                  <div class="text-body2">Looks like you haven't choose a color today</div>
                  <div class="text-body2">Ready to pick one?</div>
                  <q-btn color="primary" 
                  class="q-mt-md"
                  @click="$router.push({ name: 'express'})">Let's do it</q-btn>
              </div>
            </q-timeline-entry>

            <component
            v-for="(event, idx) in events"
            :key="idx"
            :is="(event.isGroup ? 'Group' : 'Event')"
            :group="event"
            :event="event"></component>

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
import Event from './timeline/Event'
import Group from './timeline/Group'
import utils from '../utils'
export default {
    components: {
      Event,
      Group
    },
    data() {
        return {
            lastVisible: null,
            lastGroup: false,
            events: [],
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

        }
    }
}
</script>

<style scoped>
</style>
