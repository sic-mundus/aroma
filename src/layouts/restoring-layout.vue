<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
       <q-page>
      <div class="wrapper bg-danger full-height full-width">
        <div class="jumbo shadow-4">

        </div>

        <div class="bit-power shadow-3 text-center absolute-center">
            <q-circular-progress
              indeterminate
              size="50px"
              color="primary"
              class="absolute-center"
            />
        </div>

        <p class="text-center text-subtitle1">Figuring out what to do...</p>
      </div>
       </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutRestoring',
  data () {
    return {
    }
  },
  computed: {
    // ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' })
  },
  mounted () {
   
   this.redirect();
  },
  methods: {
    async redirect() {

      let unsubscribe = this.$fb.auth().onAuthStateChanged(user => {
          let isAuthenticated = user !== null;

          console.log('mounted restoring: authenticated', isAuthenticated)
          if (isAuthenticated) {
              this.$router.replace('/app')
          } else {
              this.$router.replace('/auth')
          }
      })

      unsubscribe();
     
    }
  }
}
</script>

<style lang="scss">

.wrapper {
  position: relative;
}

.jumbo {
  height: 50vh;
  background-color: var(--q-color-primary);
}

$bit-power-height: 100px;

.bit-power {
  position: relative;
  background-color: white;
  width: $bit-power-height;
  height: $bit-power-height;
  border-radius: 50%;
}

</style>
