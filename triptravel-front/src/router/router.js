import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
const routes = [
  {
    path: '/',
    redirect: '/accueil'
  },
  {
    path: '/accueil',
    name: 'home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'LoginView',
    component: Login
  },
  {
    path: '/inscription',
    name: 'RegisterView',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router