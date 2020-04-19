<template>

     <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section class="q-pa-none">
                <q-stepper v-model="step" ref="stepper" color="primary"
                 alternative-labels
                 animated
                 :contracted="$q.screen.lt.md">
                    <q-step :name="1" title="Care to explain?" icon="settings" :done="step > 1">
                        For each ad campaign that you create, you can control how much you're willing to
                        spend on clicks and conversions, which networks and geographical locations you want
                        your ads to show on, and more.
                    </q-step>

                    <q-step :name="2" title="Anything to add?" icon="create_new_folder" :done="step > 2" style="background-color:red">
                        An ad group contains one or more ads which target a shared set of keywords.
                    </q-step>

                    <q-step :name="3" title="Here, listen" icon="mdi-music-note">
                        Try out different ad text to see what brings in the most customers, and learn how to
                        enhance your ads using features like ad extensions. If you run into any problems with
                        your ads, find out how to tell if they're running and how to resolve approval issues.
                    </q-step>

                    <template v-slot:navigation>
                        <q-stepper-navigation class="text-center">

                            <!--Back-->
                            <q-btn v-if="step > 1" flat @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" color="priamry"/>

                            <!--Done-->
                            <q-btn @click="save()" v-if="step == 3" label="Save" :style="{ 'background-color': mainColor, 'color': foregroundColor}"/>

                            <!--Next-->
                            <q-btn @click="$refs.stepper.next()" v-else label="Next" :style="{ 'background-color': mainColor, 'color': foregroundColor}"/>
                            
                        </q-stepper-navigation>
                    </template>
                </q-stepper>
            </q-card-section>

        </q-card>

</template>

<script>
import utils from '../utils'
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            step: 1,
            cats: [],
            confession: ''
        }
    },
    computed: {
        ...mapGetters({
            fav: 'wizard/fav'
        }),
        mainColor() {
            return (this.fav ? this.fav.hex : '#000')
        },
        foregroundColor() {
            return (this.fav ? utils.getContrastingColor(this.fav) : '#FFF')
        }
    },
    methods: {
        save() {
            
            this.$store.commit('wizard/SET_CATS', this.cats)
            this.$store.commit('wizard/SET_CONFESSION', this.confession)

            this.$emit('insights-selected')
        }
    }
}
</script>