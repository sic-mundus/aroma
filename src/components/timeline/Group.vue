<template>
    <q-timeline-entry heading>
       {{ group.groupName }}
    </q-timeline-entry>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        group: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('@@@@', this.group)
    }
   
}
</script>

<style lang="scss" scoped>
</style>