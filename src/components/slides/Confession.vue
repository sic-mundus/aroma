<template>
    <div class="column items-center q-gutter-md">

        <!--Info-->
        <div class="col-auto items-center">
            <div class="text-h6 text-center">Do you want to spend a few words about it?</div>
            <div class="text-subtitle text-center">This is totally optional, it will be shown to anyone who achieve a 100% affinity</div>
        </div>

        <!--Confession-->
        <div class="col-auto items-center">
        <q-input
            style="min-width:400px"
            v-model="confession"
            filled
            type="textarea"
            counter maxlength="200"
        />
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
            confession: '',
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
    watch: {
        confession(val) {
            this.$store.commit('wizard/SET_CONFESSION', this.confession)
        }
    },
    mounted() {

        // Preserve already selected
        let fromStore = this.$store.getters['wizard/confession'];
        this.confession = fromStore
    },
    methods: {

    },
}
</script>

<style scoped>

</style>

