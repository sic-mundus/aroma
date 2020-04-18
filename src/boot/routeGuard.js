import firebase from 'firebase/app'
require('firebase/auth')

export default ({
  app,
  router,
  Vue,
  store
}) => {

  const currentConfig = process.env.firebaseConfig

   // Make sure the firebase API keys have been set accordingly
   if (currentConfig) {

    // Guard URLS
    router.beforeEach((to, from, next) => {
     
      const currentUser = firebase.auth().currentUser
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

      if (requiresAuth && !currentUser) {
        console.log(' => Not logged, face the challenge');
        next({ name: 'restoring'})
      }
      else if (to.name === 'challenge' && (!requiresAuth && currentUser)) {
        console.log(' => Already logged, go to homepage');
        next({ name: 'home' })
      }
      else {
        console.log('Just go')
        next()
      }

    })

    // Register the Firebase authentication listener
    firebase.auth().onAuthStateChanged(user => {
      console.log('## onAuthStateChanged => ', user)

      if (user) {
        // Signed in. Let Vuex know.
        store.commit('auth/SET_USER', user)

        // The .catch ignore error if .replace is redirecting to dashboard and we
        // are already at that route.
        // https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
        router.replace({
          name: 'home'
        }).catch(() => {})

      } else {
        // Signed out. Let Vuex know.
        store.commit('auth/RESET_USER')
        router.replace({
          name: 'challenge'
        }).catch(() => {})

      }
    })

  }
}
