import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    time: 0
  },
  mutations: {
    time (state, value) {
      state.time = value
    }
  }
})

export default store
