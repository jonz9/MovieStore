import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import MoviesView from '../views/MoviesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/movies',
      component: MoviesView
    },
    {
      path: '/checkout',
      component: CheckoutView
    }
  ]
})

export default router
