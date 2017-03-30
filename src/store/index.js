import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: 'q'
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
    }
  }
})
