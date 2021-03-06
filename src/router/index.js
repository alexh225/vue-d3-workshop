import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'

import sections from './sections/exercises'
import demos from './sections/demos'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Introduction',
      component: () =>
        import ('@/views/introduction')
    },
    {
      path: '/overview',
      name: 'Overview',
      component: () =>
        import ('@/views/overview')
    },
    ...sections,
    // {
    //   path: '/conclusion',
    //   name: 'Conclusion',
    //   component: () =>
    //     import ('@/views/conclusion')
    // },
    {
      path: '/resources',
      name: 'Resources',
      component: () =>
        import ('@/views/PageView'),
      redirect: {
        name: 'Brewer Colors'
      },
      children: [{
          name: 'Brewer Colors',
          path: 'brewer',
          component: () =>
            import ('@/views/resources/BrewerColors')
        },
        {
          name: 'Xenographics',
          path: 'xenographics',
          component: () =>
            import ('@/views/resources/xenographics')
        },
        {
          name: 'Semiology of Graphics',
          path: 'semiology-of-graphics',
          component: () =>
            import ('@/views/resources/semiology')
        },
        {
          name: 'UX Principles as Algorithms',
          path: 'ux-principles',
          component: () =>
            import ('@/views/resources/uxprinciples')
        },
      ]
    },
    demos,
    {
path: '/chart',
component: () => import('@/views/ChartView')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
