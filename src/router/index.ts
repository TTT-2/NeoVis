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
    path: '/:objectName/:sectionName/:realmName/:elementName',
    component: FunctionDescription
  },
  {
    path: '/:sectionName/:realmName/:elementName',
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
