import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
require('firebase/auth')

import utils from '../utils'

export default ({
  Vue, store
}) => {

  const currentConfig = process.env.firebaseConfig;
  console.log('PROCESS ENV OBJECT', process.env)

  // Make sure the firebase keys have been set accordingly
  if (currentConfig) {
    // Initialize Firebase from settings
    firebase.initializeApp(currentConfig)

    // Initialize Cloud Firestore through Firebase
    const firestore = firebase.firestore()

    Vue.prototype.$fb = firebase;
    Vue.prototype.$db = firestore;

    Vue.prototype.$utils = utils;
  }

  // Add auth methods to our Vue instance
  Vue.prototype.$signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {

          store.commit('auth/SET_USER', user)
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  Vue.prototype.$signUp = (email, password, username) => {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((resp) => {

          let user = resp.user;

          // Updating displayName
          console.log('Updating displayName');
          user.updateProfile({
            displayName: username
          }).then(() => {
            console.log('displayName updated. Sending verify email')
            user.sendEmailVerification()
          }).then(() => {

            // K.
            store.commit('auth/SET_USER', user)
            resolve(user)
          })
          .catch(error => {
            throw error
          })
         
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  Vue.prototype.$recoveryPassword = (email) => {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email, password)
        .then(() => {

          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  Vue.prototype.$signOut = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {

          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }



}
