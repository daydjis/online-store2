import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/auth/auth'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'register',
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
