import utils from '../../utils'
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

    mainColor(state) {
      return state.fav.hex || '#000'
    },

    constrastingColor(state) {
      return state.fav ? utils.getContrastingColor(state.fav) : '#FFF'
    },

    cats(state) {
      return state.cats;
    },

    confession(state) {
      return state.confession;
    }
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
    },

    RESET_FAV(state) {
      state.fav = null
    },

    RESET_CATS(state) {
      state.cats = []
    },

    RESET_CONFESSION(state) {
      state.confession = ''
    }
  },

  actions: {
    reset({ state, commit }) {

      return new Promise(function(resolve, reject) {

        commit('RESET_FAV')
        commit('RESET_CATS')
        commit('RESET_CONFESSION')

        resolve()

      })

    }
  }
}