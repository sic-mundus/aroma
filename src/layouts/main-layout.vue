<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal>
      <q-toolbar>
        
        <div class="absolute-center pacifico-font items-center text-lowercase text-h4 q-pb-sm">
            Aroma
        </div>

        <q-space />

        <q-btn flat round dense icon="more_vert">
          <q-menu>
            <q-list style="min-width: 200px">
            <q-item clickable v-close-popup @click="$router.push({ name: 'profile' })">
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="signOut">
              <q-item-section>Signout</q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--Footer-->
    <q-footer
      elevated
    >
      <q-toolbar>

        <q-tabs
          align="center"
          class="full-width"
        >
          <q-route-tab
            icon="mdi-trending-up"
            to="/app/stats"
          />
          <q-route-tab
            icon="mdi-timeline-text"
            to="/app/home"
          />
          <q-route-tab
            icon="mdi-account-group"
            to="/app/people"
          />
        </q-tabs>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters({
      me: 'auth/me',
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    signOut() {
      this.$signOut().then(() => {
        console.log('Ok, signed out');
      })
    }
  },
}
</script>
