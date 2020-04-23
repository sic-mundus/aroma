<template>
<div>
    <q-item>
        <q-item-section avatar>
            <q-img :ratio="1" :img-style="{'border-radius': '50%'}" spinner-color="primary" :src="avatarSrc"/>
        </q-item-section>

        <q-item-section>
            <q-item-label>@{{ dude.displayName }}</q-item-label>
            <q-item-label caption>Rating will go here</q-item-label>
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
}
</script>

<style lang="scss" scoped>

</style>
