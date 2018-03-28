// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import WobbleClock from './lib/clock'
import store from './store'

Vue.config.productionTip = false

const clock = new WobbleClock(
  // target fps
  50,
  // update resolution (ms)
  10,
  // store to send the time to
  store
)
clock.start()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
