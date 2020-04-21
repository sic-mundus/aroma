<template>
<q-page padding class="full-height">

    <!--Colors-->
    <explore @fav-selected="dialog = true"></explore>

    <!--Dialog-->
    <q-dialog v-model="dialog" >
        <wizard @wizard-completed="completed"></wizard>
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
        }
    },
    created() {
        this.$store.dispatch('wizard/reset').then(() => {
            console.log('Wizard have been resetted');
        })
    },
    methods: {
       completed(payload) {

            // Loading
            this.$q.loading.show({
                delay: 400 // ms
            })

            let event =  {
                colId: payload.fav.id,
                catIds: payload.cats.map(x => x.id),
                confession: payload.confession,
                instant: this.$fb.firestore.Timestamp.now(),
                day: new Date().setHours(0, 0, 0 ,0),
                userId: this.$fb.auth().currentUser.uid,
            }

            console.log('event:', event)
            
           // Writing on database
           this.$db.collection('events')
           .add(event)
           .then(() => {

               this.$q.loading.hide()
               this.dialog = false;
               this.$router.replace({ name: 'home' })

           }).catch((error) => {

               this.$q.loading.hide()
           })

           
       }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.0;
}
</style>
