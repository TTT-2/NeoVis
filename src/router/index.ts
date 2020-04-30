import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from '../views/Error404.vue'
import FunctionDescription from '../views/FunctionDescription.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/imprint',
    name: 'Imprint',
    // route level code-splitting
    // this generates a separate chunk (imprint.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  },
  {
    path: '/:itemName/:attributeName',
    component: FunctionDescription
  },
  {
    path: '*',
    name: '404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
