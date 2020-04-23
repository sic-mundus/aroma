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
        // Redirect to restoring
        console.log(' => Not logged, face the challenge');
        next({ name: 'restoring'})
      }
      else if (to.name === 'challenge' && (!requiresAuth && currentUser)) {
        // Redirect to home, because the user is already logged
        console.log(' => Already logged, checking if the profile il complete');
        next({ name: 'home' })
      }
      else {
        // Continue navigating
        let me = store.getters['auth/me'];
        console.log('[routeGuard] me =', me)
        
        if (me)
        {
          console.log('[routeGuard] hasSettings:', me.hasSettings);
          console.log('[routeGuard] to.name:', to.name);
          if (me.hasSettings || to.name == 'anagraphic') {
              next()
          } else {
            console.log('to anagraphic')
            next({ name: 'anagraphic' })
          }
       } else {
         console.log('=> just go to', to.path)
         next();
       }
      }

    })

    // Register the Firebase authentication listener
    firebase.auth().onAuthStateChanged(user => {
      console.log('## onAuthStateChanged => ', user)

      if (user) {
        
        let uid = user.uid;

        let db = firebase.firestore();
        // Retrieve user from firestore
        db
        .collection('dudes')
        .doc(uid)
        .get()
        .then((doc) => {

          if (doc.exists) {
            
            let me = doc.data();
            console.log('dude found in firestore!', me);

            store.commit('auth/SET_ME', me)

            router.replace({
              name: 'home'
            }).catch(() => {})

          } else {
            console.warn('Dude not found in firestore. Possibly it\s still being created');
          }
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
