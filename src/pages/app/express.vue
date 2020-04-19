<template>
<q-page padding class="full-height">

    <!--Colors-->
    <explore @fav-selected="dialog = true"></explore>

    <!--Dialog-->
    <q-dialog v-model="dialog" >
        <wizard @insights-selected="dialog = false; completed()"></wizard>
    </q-dialog>

</q-page>
</template>

<script>
import Explore from '../../components/Explore'
import Wizard from '../../components/wizard'

export default {
    components: {
        Explore,
        Wizard
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
