<template>

     <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section class="q-pa-none">
                <q-stepper v-model="step" ref="stepper" color="primary"
                 alternative-labels
                 animated
                 swipeable
                 :contracted="$q.screen.lt.md">

                    <!--Review-->
                    <q-step :name="1" title="Your color" prefix="1" :done="step > 1">
                        <review></review>    
                    </q-step>

                    <q-step :name="2" title="Why him?" prefix="2" :done="step > 2">
                        <categories></categories>
                    </q-step>

                    <q-step :name="3" title="Care to explain?" prefix="3">
                       <confession></confession>
                    </q-step>

                    <template v-slot:navigation>
                        <q-stepper-navigation class="text-center">

                            <!--Back-->
                            <q-btn v-if="step > 1" flat @click="$refs.stepper.previous()" label="Back" class="q-mr-sm" color="primary"/>

                            <!--Done-->
                            <q-btn @click="save()" v-if="step == 3" label="Save" color="primary"/>

                            <!--Next-->
                            <q-btn @click="$refs.stepper.next()" v-else label="Next" color="primary"/>
                            
                        </q-stepper-navigation>
                    </template>
                </q-stepper>
            </q-card-section>

        </q-card>

</template>

<script>
import Review from './steps/Review'
import Categories from './steps/Categories'
import Confession from './steps/Confession'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        Review,
        Categories,
        Confession
    },
    data() {
        return {
            step: 1,
        }
    },
    computed: {
        ...mapGetters({
            fav: 'wizard/fav',
            mainColor: 'wizard/mainColor',
            contrastingColor: 'wizard/constrastingColor'
        }),
    },
    methods: {
        save() {

            let payload = {
                fav: this.fav,
                cats: this.$store.getters['wizard/cats'],
                confession: this.$store.getters['wizard/confession']
            }

            console.log('Here:', payload);
            this.$store.dispatch('wizard/reset').then(() => {
                console.log('Wizard have been resetted');
                this.$emit('wizard-completed', payload)
            })
            
        }
    }
}
</script>