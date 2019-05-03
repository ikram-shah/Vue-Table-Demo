import Vue from 'vue'
import APImode from '@/components/APImode'
import CustomizeField from '@/components/CustomizeField'
import DataMode from '@/components/DataMode'
import Pagination from '@/components/Pagination'
import Sorting from '@/components/Sorting'
import SpecialField from '@/components/SpecialField'


import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/APImode',
      name: 'API Mode',
      component: APImode
    },
    {
      path: '/CustomizeField',
      name: 'Customize Field',
      component: CustomizeField
    },
    {
      path: '/DataMode',
      name: 'Data Mode',
      component: DataMode
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: Pagination
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
