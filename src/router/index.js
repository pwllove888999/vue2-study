import Vue from 'vue'
import VueRouter from 'vue-router'

import Directive from '../components/directive.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/directive',
  component: Directive
}]

const router = new VueRouter({
  routes
})

export default router
