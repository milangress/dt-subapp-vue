// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import WobbleClock from './lib/clock'
import NetworkClock from './lib/network-clock'
import store from './store'

import localID from './plugins/local-id'
import loginOrSignup from './plugins/login-or-signup'

Vue.config.productionTip = false

localID({ Vue })
loginOrSignup({ Vue })

const clock = new WobbleClock(
  // target fps
  50,
  // update resolution (ms)
  10,
  // store to send the time to
  store
)
clock.start()

const netClock = new NetworkClock()
setInterval(() => {
  console.log('time', netClock.getTime())
}, 1000)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
