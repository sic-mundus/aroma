<template>
  <div>
    <!--Motivation-->
    <div
      class="motivation-header items-center q-pa-lg q-mt-xl"
    >
      <div class="column justify-center items-center">
        <div class="text-h3 text-center text-primary text-bold">What color do you feel like today?</div>
        <div class="text-h5 text-center text-primary q-mt-sm">don't overthink it.<br>just scroll down and select whaterver color suits you right now</div>

         <!--Scroll-->
          <q-btn
            icon="mdi-chevron-down"
            class="q-pa-md q-mt-lg"
            :size="'lg'"
            flat
            round
            dense
          />
        </div>
    </div>

     

    <q-infinite-scroll
      @load="onLoad"
      :offset="150"
      ref="infinite_scroll"
    >

      <transition-group
        name="list"
        class="row q-col-gutter-lg"
      >
        <div
          class="col col-xs-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(hue, idx) in hues"
          :key="hue.id"
        >
          <q-card
            v-ripple
            class="my-card q-pa-md"
            :class="{'shadow-9': isFav(hue)}"
          >

            <!--Color-->
            <div
              class="color-host"
              @click.prevent="toggleFav(hue)"
              :style="{ 'background-color': hue.hex }"
            >

            </div>

            <!--Info-->
            <q-card-section class="q-px-sm">
              <!--Name & Hex-->
              <div class="text-h6">{{ hue.name }}</div>
              <div class="text-subtitle2" v-if="false" style="opacity:.8">{{ hue.hex }}</div>

              <!--Compass-->
              <q-btn
                @click.prevent="exploreIndex = idx; addLead(hue)"
                class="absolute-top-right q-mt-md"
                flat
                round
                dense
                icon="mdi-magnify-scan"
                :size="'md'"
              >
              <q-tooltip :content-style="{'font-size': '16px', 'background-color': hue.hex, 'color': contrasColorOf(hue)}">
                Explore similar feelings
              </q-tooltip>
              </q-btn>
            </q-card-section>
          </q-card>

        </div>
      </transition-group>

      <!--Loading-->
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots
            color="primary"
            size="40px"
          />
        </div>
      </template>
    </q-infinite-scroll>

    <!-- Sticky Top Bar -->
    <q-page-sticky
      expand
      position="top"
    >
      <q-toolbar
        inset
        elevated
        class="bg-secondary full-width text-white justify-center items-center q-pa-none"
      >

        <!--Leaders-->
        <div v-if="false">
          <div
            class="q-mx-sm"
            v-for="n in maxLeads"
            :key="n"
          >
            <cherry
              :available="leads.length >= n"
              :hue="leads[n - 1]"
            ></cherry>

          </div>
        </div>

        <!--Picker-->
       <q-btn icon="palette" class="cursor-pointer"  round flat dense>
          <q-tooltip :content-style="{'font-size': '16px'}">
                Pick a mood and start from there
          </q-tooltip>
          <q-popup-proxy transition-show="scale" transition-hide="scale" :breakpoint="3000">
            <q-color class="my-picker" no-header no-footer v-model="pickered" format-model="rgb" :default-value="pickerStartingColor"/>
          </q-popup-proxy>
        </q-btn>

        <!--Shuffle-->
        <q-btn
          dense
          round
          flat
          icon="shuffle"
          @click="shuffle">
              <q-tooltip :content-style="{'font-size': '16px'}">
                Shuffle, start fresh!
              </q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-page-sticky>

    <!--FAB-->
    <q-page-sticky
      position="top-right"
      v-show="fav.hex"
      :offset="[16,16]"
    >
      <q-btn
        fab
        icon="check"
        :style="{'background-color': fav.hex, 'color': contrasColorOf(fav)}"
        @click="confirm"
      />
    </q-page-sticky>

  </div>
</template>

<script>
import _ from 'lodash';
import params from '../params/'
import Cherry from './Cherry'
import utils from '../utils'
export default {
  //props: ['pickered'],
  components: {
    Cherry
  },
  data () {
    return {
      leads: [],
      fav: {},
      hues: [],
      exploreIndex: -1,

      pickered: null
    }
  },
  mounted () {
    console.log('Here I am, let\'s begin')
  },
  watch: {
    pickered: {
      handler(val) {
        console.log('pickered changed to ', val);

        // Throttle while dragging
        this.pickeredHandler();
      },    
      deep: true,
    }
  },
  computed: {

    isLead () {
      return hue => {
        return this.leads.some(x => x.id === hue.id);
      }
    },

    isFav () {
      return hue => {
        return this.fav.id === hue.id;
      }
    },

    isDisplayed () {
      return hue => {
        return this.hues.some(x => x.id === hue.id);
      }
    },

    componentToHex () {
      return c => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
    },

    rgbToHex () {
      return (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    },

    maxLeads () {
      return params.MAX_LEADS;
    },

    contrasColorOf(hue) {
      return hue => {
        return this.$utils.getContrastingColor(hue)
      }
    },

    pickerStartingColor() {

      // If's something is selected, use it
      if (this.fav.hex) {
        return this.fav.hex;
      }

      // Otherwise, use latest leader (if any)
      else if (this.leads.length > 0) {
        return this.leads.slice(-1)[0].hex
      }

      // Otherwise, use a fallback

      return '#3EB489'
    }

  },
  methods: {
    onLoad (page, done) {
      
      console.log('#### PAGE: [' + page + '] #####')

      let payload = {
        leads: this.leads,
        hues: this.hues,
        page: page
      }

      this.$store.dispatch('data/getHues', payload).then(d => {

        if (this.exploreIndex === -1) {
          // Append
          console.log('=> Appending these ' + d.length + ' items:', d)
          this.hues = this.hues.concat(d)
        } else {

          // Insert into proper position
          console.log('=> Inserting these ' + d.length + ' items:', d)
          for (var i = 0; i < d.length; i++) {
            let item = d[i]
            this.hues.splice(this.exploreIndex + 1, 0, item)
          }

          this.exploreIndex = -1;
        }

        let stop = (!d || d.length === 0);

        done(stop);
      })
    },
    addHue (hue) {
      if (!this.isDisplayed(hue)) {

        this.hues.push(hue);
      }
    },
    addLead (hue) {

      if (!this.isLead(hue)) {

        // Add to leads
        this.leads.push(hue)

        // Infinite scroll
        this.$refs.infinite_scroll.reset();
        this.$refs.infinite_scroll.resume();
        this.$refs.infinite_scroll.trigger();

      } else {
        // Remove from leads
        this.leads = this.leads.filter(x => x.id !== hue.id)
      }

      // Emit event to notify home
      this.$emit('leads-changed', this.leads)

    },
    toggleFav(hue) {
      console.log('toggle', hue)
      if (this.isFav(hue)) {
        this.fav = {};
      } else {
        this.fav = hue;
      }

      this.$emit('fav-changed', this.fav);

    },
    shuffle() {
      this.hues = [];
      this.leads = [];

      // Removing the selection
      this.fav = {};

       // Infinite scroll
      this.$refs.infinite_scroll.reset();
      this.$refs.infinite_scroll.resume();
      this.$refs.infinite_scroll.trigger();
    },
    confirm() {
      this.$store.commit('wizard/SET_FAV', this.fav)
      this.$emit('fav-selected', this.fav);
    },
    pickeredHandler: _.throttle(function(v) {

          let comps = this.pickered.split(',');
          let r = comps[0].replace('rgb(', '')
          let g = comps[1]
          let b = comps[2].replace(')','')
          let hex = this.componentToHex(r, g, b)
          let name = 'Custom'
          let id = 0;

          let hue = {
            r: r,
            g: g,
            b: b,
            hex: hex,
            name: name,
            id: id
          }

          // Clean existing
          this.hues = [];
          this.leads = [];

          this.addLead(hue);

        }, 400, {
          'leading': true,
          'trailing': false
        })
      
  }

}
</script>

<style lang="scss" scoped>
.color-host {
  height: 200px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(30px);
}

.my-card {
  cursor: pointer;
}

.motivation-header {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.my-picker {
  width: 400px;
}

</style>
