import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from '../views/Error404.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:baseName/:objectName/:sectionName/:realmName/:elementName',
    component: Details
  },
  {
    path: '/:baseName/:sectionName/:realmName/:elementName',
    component: Details
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
