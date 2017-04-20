import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Portfolio from 'components/Portfolio'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
