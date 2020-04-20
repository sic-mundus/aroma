<template>
    <q-timeline-entry>
        <template v-slot:title>
            <div class="row">
                <div class="circle q-mr-md" :style="{'background-color': color.hex }"></div>
                {{ color.name }}
            </div>
        </template>
        <template v-slot:subtitle>
            {{ $utils.formatTimestampFull(event.instant) }}
        </template>

        <!--Categorie-->
        <div>
            <q-btn 
            v-for="cat in cats"
            :key="cat.id"
            flat
            round 
            :size="'md'"
            :icon="cat.icon"
            :style="{
                'color': ($q.config.brand.primary) }">
                <q-tooltip :content-style="{'font-size': '16px'}">
                {{ cat.name }}
              </q-tooltip>
            </q-btn>
        </div>

        <div>
            <div v-if="event.confession">
                <p>Confession</p>
                {{ event.confession }}
            </div>
        </div>
    </q-timeline-entry>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        event: {
            type: Object,
            required: true
        },
        heading: {
            type: String,
            required: false
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('event mounted:', this.event)
    },
    computed: {
        ...mapGetters({
            getColorById: 'data/getColorById',
            getCatsByIds: 'data/getCatsByIds'
        }),

        color() {
            return this.getColorById(this.event.colId)
        },

        contrastingColor() {
            return this.$utils.getContrastingColor(this.color)
        },

        getAvatarUrl() {
          return event => {
            let code = this.color.hex.replace('#', '')
            return 'http://singlecolorimage.com/get/' + code + '/100x100'
          }
        },

        cats() {
            return this.getCatsByIds(this.event.catIds)
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
</style>