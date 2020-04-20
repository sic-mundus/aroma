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
            <q-btn 
            style="cursor:default !important"
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

        <!--Confession-->
        <div class="q-pl-sm">
            <div v-if="event.confession" class="text-body2">
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

        humanDate() {
            return this.$utils.formatTimestampFull(this.event.instant);
        },

        color() {
            return this.getColorById(this.event.colId)
        },

        contrastingColor() {
            return this.$utils.getContrastingColor(this.color)
        },

        avatarUrl() {
            let code = this.color.hex.replace('#', '')
            return 'http://singlecolorimage.com/get/' + code + '/150x150'
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