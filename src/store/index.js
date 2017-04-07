import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    token: '149154516452f393efc757d6a62b081e133b45c446',
    version: '2.0',
    uid: '730',
    uname: 'com01197688'
  },
  mutations: {
    increment (state, n) {
      console.log(n)
      state.query = n
    }
  },
  actions: {
    increment ({commit}, n) {
      commit('increment', n)
    }
  },
  getters: {
    query (state) {
      return state.query
    },
    token (state) {
      return state.token
    },
    version (state) {
      return state.version
    },
    uid (state) {
      return state.uid
    },
    username (state) {
      return state.uname
    }
  }
})
