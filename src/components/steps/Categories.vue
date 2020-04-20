<template>
    <div class="column items-center q-gutter-md">

        <!--Info-->
        <div class="col-auto items-center">
            <div class="text-h6 text-center">Why do you feel {{ fav.name }}?</div>
            <div class="text-subtitle text-center">Select as many reasons as you want</div>
        </div>

        <!--Categories-->
        <div class="col-auto items-center">
        <div class="row q-gutter-sm q-my-md justify-center">
            <div class="col-3 justify-center text-center" v-for="cat in availableCats" :key="cat.id" @click="toggleCat(cat)">
                <q-btn flat round 
                    :icon="cat.icon"
                    :style="{
                        'background-color': (isSelected(cat) ? mainColor : ''),
                        'color': (isSelected(cat) ? contrastingColor : $q.config.brand.primary)}" />
                <div class="text-caption q-mt-xs">{{ cat.name }}</div>
            </div>
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
            availableCats: [],
            cats: [],
        }
    },
    computed: {
        ...mapGetters({
            fav: 'wizard/fav',
            mainColor: 'wizard/mainColor',
            contrastingColor: 'wizard/constrastingColor',
        }),

        isSelected () {
            return cat => {
                return this.cats.some(x => x.id === cat.id);
            }
        }
    },
    mounted() {
        this.getCategories();

        // Preserve already selected
        let fromStore = this.$store.getters['wizard/cats'];
        this.cats = [...fromStore]
    },
    methods: {
        getCategories() {
            this.$store.dispatch('data/getCats').then(d => {
                this.availableCats = d;
            });
        },

        toggleCat(cat) {
            if (this.isSelected(cat)) {
                // Remove
                this.cats = this.cats.filter(x => x.id !== cat.id)
            } else {
                // Add
                this.cats.push(cat);
            }
        },

    },
    beforeDestroy() {
        this.$store.commit('wizard/SET_CATS', this.cats)
    }
}
</script>

<style scoped>

</style>

