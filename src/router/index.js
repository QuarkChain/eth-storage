import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
]

const router = new VueRouter({
  base: '/eth-store.eth/',
  routes
})

export default router
