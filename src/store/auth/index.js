import Firebase from 'firebase/app'
import 'firebase/auth'

export default {
  namespaced: true,

  state: {
    //user: null, // Authentication object
    me: null // Firestore custom object
  },

  getters: {

    me(state) {
      return state.me
    },

    isAuthenticated(state) {
      return !!state.me
    }
  },

  mutations: {
    SET_USER(state, payload) {
      let user = JSON.parse(JSON.stringify(payload))
      state.user = user
    },

    SET_ME(state, payload) {
      let me = JSON.parse(JSON.stringify(payload))
      state.me = me
    },

    RESET_USER(state) {
      state.user = null
    },

    RESET_ME(state) {
      state.me = null
    }
  },

  actions: {
    
  }
}