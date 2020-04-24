<template>
<div>
    <q-item>
        <q-item-section avatar>
            <q-img :ratio="1" :img-style="{'border-radius': '50%'}" spinner-color="primary" :src="avatarSrc"
                style="cursor: pointer"
               @click="$root.$emit('request-show-dude-info', dude)" />
        </q-item-section>

        <q-item-section>

            <!--1st Line-->
            <q-item-label>@{{ dude.displayName }}</q-item-label>

            <!--2nd line-->
            <q-item-label v-if="pickedSameColor" caption>Picked your exact same color</q-item-label>
            <q-item-label v-else caption>Picked {{ hisColor.name }}</q-item-label>
            <q-item-label class="q-pt-sm">
                  <q-linear-progress rounded 
                  :value="affinity" 
                  :color="'aroma-' + hisColor.id"
                  :track-color="$utils.getContrastingColor(hisColor)" />
            </q-item-label>
            <q-item-label caption>Affinity: {{ affinityHuman }}%</q-item-label>
        </q-item-section>

        <q-item-section avatar>

          <q-btn 
          v-if="!isMyBuddy"
          flat 
          round 
          :icon="'mdi-account-plus'" 
          :size="'md'" 
          color="primary"
          @click="add">
              <q-tooltip :content-style="{'font-size': '16px'}">
                Add to your buddies
            </q-tooltip>
          </q-btn>

           <q-btn 
          v-else
          flat 
          round 
          :icon="'mdi-hand'" 
          :size="'md'" 
          color="primary"
          @click="hi">
              <q-tooltip :content-style="{'font-size': '16px'}">
                Wave at {{ dude.displayName }}
            </q-tooltip>
          </q-btn>
        </q-item-section>
    </q-item>

    <q-separator></q-separator>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        dude: { // Note: this is not me, it's a random dude
            type: Object,
            required: true
        },
        event: { // This is my event!
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hisColor: {},
            myColor: {}
        }
    },
    computed: {
        ...mapGetters({
            me: 'auth/me',
            getColorById: 'data/getColorById',
            getAffinity: 'data/getAffinity'
        }),

        avatarSrc() {
            if (this.dude.picUrl)
                return this.dude.picUrl;
            else if (this.dude.fullName)                
                return 'https://eu.ui-avatars.com/api/?name=' + this.dude.fullName.replace(' ','+')
            else
                return ''
        },

        pickedSameColor() {
            return this.dude.colId ==this.event.colId
        },

        isMyBuddy() {
            let myBuddies = this.me.buddyIds;
            return myBuddies.some(x => x == this.dude.userId)
        },


        affinity() {
           return this.getAffinity(this.hisColor, this.myColor);     
        },

        affinityHuman() {
            return (this.affinity * 100).toFixed(2)
        }
    },
    methods: {

        add() {
            
            let myBuddies = [...this.me.buddyIds];
            myBuddies.push(this.dude.userId);

            this.$db
                .collection('dudes')
                .doc(this.me.userId)
                .set({
                    buddyIds: myBuddies
                }, { merge: true })
                .then(() => {

                    console.log('Buddy added to your array in firestore. time to commit to vuex');

                    // Commit to store
                    let me = {...this.me};
                    me.buddyIds = myBuddies;
                    this.$store.commit('auth/SET_ME', me)

                    this.$q.notify(this.dude.displayName + ' added to your network')
                })
        },

        hi() {

        }
    },
    mounted() {
        this.myColor = this.getColorById(this.event.colId)
        this.hisColor = this.getColorById(this.dude.colId) // Extended
    }

}
</script>

<style lang="scss" scoped>

</style>
