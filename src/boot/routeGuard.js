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

        firebase.firestore()
          .collection('dudes')
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              let dude = doc.data();
              
              // Commit me into vuex
              store.commit('auth/SET_ME', dude);

            } else {
              console.warn('Cannot find dude. Maybe its still being created');
            }

             // Ok
             router.replace({
               name: 'home'
             }).catch(() => {})
          })
        

      } else {
        // Signed out. Let Vuex know.
        store.commit('auth/RESET_ME')

        router.replace({
          name: 'challenge'
        }).catch(() => {})

      }
    })

  }
}
