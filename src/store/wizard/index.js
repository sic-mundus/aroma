export default {
  namespaced: true,

  state: {
    fav: null,
    cats: [],
    confession: ''
  },

  getters: {
    fav(state) {
      return state.fav
    },
  },

  mutations: {
    SET_FAV(state, payload) {
      state.fav = payload
    },

    SET_CATS(state, payload) {
      state.cats = payload
    },

    SET_CONFESSION(state, payload) {
      state.confession = payload
    }
  },

  actions: {

  }
}