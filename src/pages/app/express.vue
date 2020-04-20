<template>
<q-page padding class="full-height">

    <!--Colors-->
    <explore class="absolute" @fav-selected="dialog = true"></explore>

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
    methods: {
       completed(payload) {

           this.dialog = false;

            let event =  {
                fav: payload.fav.id,
                cats: payload.cats.map(x => x.id),
                confession: payload.confession,
                userId: this.$fb.auth().currentUser.uid,
            }

            console.log('event:', event)
            
           // Writing on database
           this.$db.collection('events')
           .doc()
           .set(event)
           .then(() => {

               console.log('ok')
               this.$router.replace({ name: 'home' })

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
