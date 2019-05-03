import Vue from 'vue'
import APImode from '@/components/APImode'
import Home from '@/components/Home'
import FormatField from '@/components/FormatField'
import DataMode from '@/components/DataMode'
import Sorting from '@/components/Sorting'
import SpecialField from '@/components/SpecialField'


import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/APImode',
      name: 'API Mode',
      component: APImode
    },
    {
      path: '/FormatField',
      name: 'Format Field',
      component: FormatField
    },
    {
      path: '/DataMode',
      name: 'Data Mode',
      component: DataMode
    },
    {
      path: '/Sorting',
      name: 'Sorting',
      component: Sorting
    },
    {
      path: '/SpecialField',
      name: 'Special Field',
      component: SpecialField
    },

  ]
})
