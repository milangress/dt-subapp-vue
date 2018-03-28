import Vue from 'vue'
import Router from 'vue-router'
import DanceOMat from '@/components/DanceOMat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DanceOMat',
      component: DanceOMat
    }
  ]
})
