<template>
    <div class="column items-center q-gutter-md">

        <div class="col-auto circle shadow-3" :style="{'background-color': mainColor}">
        </div>

        <!--Info-->
        <div class="col-auto items-center">
            <div class="text-h6 text-center">{{ fav.name }}</div>
            <div class="text-subtitle text-center">{{ fav.hex }}</div>
        </div>

        <!--History-->
        <div v-if="anyEvent">
            <p>You felt the same way before, remember?</p>
             <q-list>

                <div v-for="(ev , idx) in events" :key="idx">
                <q-item>
                    <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="star" color="yellow" />
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />
                </div>

                </q-list>
        </div>

        <!--Newbie-->
        <div class="col-auto items-center text-center" v-else>
            <p>You never felt this way before. It's okay, it's important to experience new colors</p>
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
            events: [],
            busy: true,
        }
    },
    computed: {
        ...mapGetters({
            fav: 'wizard/fav',
            mainColor: 'wizard/mainColor',
            contrastingColor: 'wizard/constrastingColor'
        }),
        anyEvent() {
            return this.events.length > 0
        }
    },
    mounted() {
        this.getHistory(this.fav);
    },
    methods: {
        getHistory(col) {

        }
    }
}
</script>

<style scoped>
.circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>