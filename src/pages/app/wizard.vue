<template>
<q-page padding class="full-height">

    <!--Colors-->
    <explore @fav-selected="dialog = true"></explore>

    <!--Dialog-->
    <q-dialog v-model="dialog" >
        <insights @insights-selected="dialog = false; completed()"></insights>
    </q-dialog>

</q-page>
</template>

<script>
import Explore from '../../components/Explore'
import Insights from '../../components/insights'

export default {
    components: {
        Explore,
        Insights
    },
    data() {
        return {
            dialog: false,
            step: 1,
        }
    },
    methods: {
       completed() {
           this.$router.replace({ name: 'home' })
       }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
