import Firebase from 'firebase/app'
import 'firebase/auth'

export default {
  namespaced: true,

  state: {
    user: null
  },

  getters: {
    user(state) {
      return state.user
    },

    isAuthenticated(state) {
      return !!state.user
    }
  },

  mutations: {
    SET_USER(state, payload) {
      let user = JSON.parse(JSON.stringify(payload))
      console.log('committing', user)
      state.user = user
    },

    RESET_USER(state) {
      state.user = null
    }
  },

  actions: {
    
  }
}