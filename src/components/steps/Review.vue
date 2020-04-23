<template>
    <div class="column items-center q-gutter-md">

        <div class="col-auto circle shadow-3 q-mx-none" :style="{'background-color': mainColor}">
        </div>

        <!--Info-->
        <div class="col-auto items-center q-mx-none">
            <div class="text-h6 text-center">{{ fav.name }}</div>
            <div class="text-subtitle text-center">{{ fav.hex }}</div>
        </div>

        <!--Loading-->
        <q-circular-progress
        v-if="busy"
        indeterminate=""
        class="col-auto  items-center text-center q-ma-lg"
        size="50px"
        color="primary"
        ></q-circular-progress>

        <div v-else>
            <!--History-->
            <div v-if="anyEvent">
                <p class="text-center text-subtitle1">You felt the same way before, remember?</p>
                <q-list>

                    <div v-for="(ev , idx) in events" :key="idx">
                    <q-item>
                        <q-item-section style="min-width:400px !important">
                            <q-item-label>{{ $utils.formatTimestampFull(ev.instant) }}</q-item-label>
                            <q-item-label caption lines="2" v-if="ev.confession">{{ ev.confession }}.</q-item-label>
                        </q-item-section>

                        <q-item-section side top class="absolute-top-right">
                            <div class="row q-gutter-xs">
                                <q-icon v-for="cat in cats(ev)" 
                                :key="cat.id" 
                                :name="cat.icon"
                                :size="'sm'"
                                color="#AAA" />
                            </div>
                        </q-item-section>
                    </q-item>

                    <q-separator spaced inset />
                    </div>

                    </q-list>
            </div>

            <!--Newbie-->
            <div class="col-auto items-center text-center" v-else>
                <p>You never felt this way before. It's okay, it's important to experience new colors</p>
            </div>
        </div>

    </div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            events: [],
            busy: true,
        }
    },
    computed: {
        ...mapGetters({
            fav: 'wizard/fav',
            mainColor: 'wizard/mainColor',
            contrastingColor: 'wizard/constrastingColor',
            me: 'auth/me',
            getCatsByIds: 'data/getCatsByIds'
        }),
        anyEvent() {
            return this.events.length > 0
        },

        cats() {
            return event => {
                return this.getCatsByIds(event.catIds)
            }
        }
    },
    mounted() {
        this.getHistory(this.fav);
    },
    methods: {
        getHistory(col) {

            this.busy = true;

            this.$db
              .collection('events')
              .where('userId', '==', this.me.userId)
              .where('colId', '==', this.fav.id)
              .orderBy('instant', 'desc')
              .limit(3)
              .get()
              .then((documentSnapshots) => {

                  documentSnapshots.forEach((doc) => {
                    const event = doc.data();
                    event.id = doc.id;

                    this.events.push(event)
                  });

                  this.busy = false;
              });
        }
    }
}
</script>

<style scoped>
.circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>