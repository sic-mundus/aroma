<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal>
      <q-toolbar>
        
      <div class="absolute-center pacifico-font items-center text-lowercase text-h4 q-pb-sm">
          Aroma
        </div>

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
            icon="mdi-compass"
            to="/app/home"
          />
          <q-route-tab
            icon="mdi-account"
            to="/app/profile"
          />
        </q-tabs>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
