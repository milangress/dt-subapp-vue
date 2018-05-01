import Vue from 'vue'
import Router from 'vue-router'

import SkeletonTest from '@/components/helpers/SkeletonTester'

import DanceOMat from '@/components/DanceOMat'
import poseTool from '@/components/pose-tool'
import RhythmAndShoes from '@/components/RhythmAndShoes'
import PathDrawer from '@/components/PathDrawer'
import LostInSpace from '@/components/LostInSpace'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tests/skeleton',
      name: 'SkeletonTest',
      component: SkeletonTest
    },
    {
      path: '/mr-griddle',
      name: 'MrGriddle',
      component: poseTool.MrGriddle
    },
    {
      path: '/lost-in-space',
      name: 'LostInSpace',
      component: LostInSpace
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
    },
    {
      path: '/path-drawer',
      name: 'PathDrawer',
      component: PathDrawer
    }
  ]
})
