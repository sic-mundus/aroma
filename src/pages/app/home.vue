<template>
<q-page padding class="bg-grey-3 full-height">

        <timeline v-if="!isExploring" @on-explore="isExploring = true"></timeline>
        <!-- <explore v-else @stop-exploring="isExploring = false"></explore> -->

</q-page>
</template>

<script>
import Timeline from '../../components/Timeline';
//import Explore from '../../components/Explore';
export default {
    components: {
        Timeline,
        //Explore,
    },
    data() {
        return {
            isExploring: false
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
