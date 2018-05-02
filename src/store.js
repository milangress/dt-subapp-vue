import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import { createClient } from './lib/api'

Vue.use(Vuex)

const idField = 'uuid'
const opts = { idField }
const client = createClient('https://api.motionbank.org')
const { service, auth } = feathersVuex(client, opts)

const store = new Vuex.Store({
  plugins: [
    service('annotations', opts),
    service('maps', opts),
    service('users', opts),
    auth({ userService: 'users' })
  ],
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
