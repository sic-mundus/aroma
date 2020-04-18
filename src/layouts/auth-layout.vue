<template>
  <q-layout>

    <q-page-container>
      <q-page
        class="gradient row items-stretch justify-center items-center"
      >
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutAuth',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.gradient {
  background: linear-gradient(to bottom right, var(--q-color-accent), var(--q-color-secondary));
}
</style>
