<template>
  <q-page padding>
    <h1>Profile</h1>
    <q-btn @click="signOut">
      ESCI
    </q-btn>
  </q-page>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$signOut().then(() => {
        console.log('Ok, signed out');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
