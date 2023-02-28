import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EthDenverView from '../views/EthDenverView.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/denver',
    name: 'EthDenver',
    component: EthDenverView
  },
]

const router = new VueRouter({
  routes
})

export default router
