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
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
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
