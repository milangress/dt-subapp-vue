import Vue from 'vue'
import Router from 'vue-router'
import DanceOMat from '@/components/DanceOMat'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
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
