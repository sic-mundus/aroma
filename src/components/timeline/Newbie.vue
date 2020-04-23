<template>
<div>
    <q-item>
        <q-item-section avatar>
            <q-img :ratio="1" :img-style="{'border-radius': '50%'}" spinner-color="primary" :src="avatarSrc"/>
        </q-item-section>

        <q-item-section>
            <q-item-label>@{{ dude.displayName }}</q-item-label>
            <q-item-label caption>Picked the same color as you</q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-btn flat round :icon="'mdi-account-plus'" :size="'md'" color="primary" @click="add">
              <q-tooltip :content-style="{'font-size': '16px'}">
                Add to your buddies
            </q-tooltip>
          </q-btn>
        </q-item-section>
    </q-item>

    <q-separator></q-separator>
</div>
</template>

<script>
export default {
    props: {
        dude: {
            type: Object,
            required: true
        }
    },
    computed: {
        avatarSrc() {
            if (this.dude.picUrl)
                return this.dude.picUrl;
            else if (this.dude.fullName)                
                return 'https://eu.ui-avatars.com/api/?name=' + this.dude.fullName.replace(' ','+')
            else
                return ''
        }
    },
    methods: {
        add() {
            this.$emit('request-add-buddy', this.dude)
        }
    },
    mounted() {
        console.log('mounted newbie:', this.dude)
    }

}
</script>

<style lang="scss" scoped>

</style>
