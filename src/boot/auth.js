import Firebase from 'firebase/app'
import 'firebase/auth'

export default ({
  app,
  router,
  Vue,
  store
}) => {

  // Guard URLS
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)
    let unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      let isAuthenticated = user !== null;

      if (authRequired) {
        if (isAuthenticated) {
          // User is already signed in. Continue on.

          if (from.query.redirect && !to.query.redirected) {
            console.log('redirecting to ', from.query.redirect)
            next({
              name: from.query.redirect,
              query: {
                redirected: true
              }
            })
          } else {
            console.log('=> granted')
            next()
          }
        } else {
          // Not signed in. Redirect to login page.
          console.log('=> passa per il via')
          next({
            name: 'challenge',
            query: {
              redirect: to.name
            }
          })
        }
      } else {
        // Doesn't require authentication. Just continue on.
        next()
      }

    })

    unsubscribe();
  })

  // Register the Firebase authentication listener
  Firebase.auth().onAuthStateChanged(user => {
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

      // new Vue(app) /* eslint-disable-line no-new */
    } else {
      // Signed out. Let Vuex know.
      store.commit('auth/RESET_USER')
      router.replace({
        name: 'challenge'
      }).catch(() => {})

      // new Vue(app) /* eslint-disable-line no-new */
    }
  })
}
