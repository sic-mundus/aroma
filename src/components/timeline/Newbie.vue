<template>
<div>
    <q-item>
        <q-item-section avatar>
            <q-img :img-style="{'border-radius': '50%'}" spinner-color="primary" :src="avatarSrc"/>
        </q-item-section>

        <q-item-section>
            <q-item-label>@{{ dude.displayName }}</q-item-label>
            <q-item-label caption>Picked the same color as you</q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-btn flat round :icon="'mdi-account-plus'" :size="'md'" color="primary">
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
            if (this.dude.photoUrl)
                return this.dude.photoUrl;

            return 'https://i.pravatar.cc/100'
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
