<template>
  <q-page padding>
    <h1>Profile</h1>
    <div v-if="isAuthenticated">
      <h3>{{ me.displayName }}</h3>
      <h3>{{ me.email }}</h3>
    </div> 
    <q-btn @click="signOut">
      ESCI
    </q-btn>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  methods: {
    signOut() {
      this.$signOut().then(() => {
        console.log('Ok, signed out');
      })
    }
  },
  computed: {
    ...mapGetters({
      me: 'auth/me',
      isAuthenticated: 'auth/isAuthenticated'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
