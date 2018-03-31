import Vue from 'vue'
import Router from 'vue-router'
import DanceOMat from '@/components/DanceOMat'
import MrGriddle from '@/components/MrGriddle'
import RhythmAndShoes from '@/components/RhythmAndShoes'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mr-griddle',
      name: 'MrGriddle',
      component: MrGriddle
    },
    {
      path: '/rhythm-shoes',
      name: 'RhythmAndShoes',
      component: RhythmAndShoes
    },
    {
      path: '/',
      name: 'DanceOMat',
      component: DanceOMat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
