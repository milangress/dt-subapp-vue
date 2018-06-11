import Vue from 'vue'
import Router from 'vue-router'

import SkeletonTest from '@/components/helpers/SkeletonTester'

import StartSeite from '@/components/StartSeite'
import poseTool from '@/components/pose-tool'
import RhythmAndShoes from '@/components/RhythmAndShoes'
import RotatingArcs from '@/components/RotatingArcs'

import mtest from '@/components/mtest'
import Rhythm from '@/components/Rhythm'

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
      name: 'StartSeite',
      component: StartSeite
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
    },
    {
      path: '/rotating-arcs',
      component: RotatingArcs
    },
    {
      path: '/mtest',
      component: mtest
    },
    {
      path: '/rhythm',
      component: Rhythm
    }

  ]
})
