import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingPage'
import About from '../views/AboutPage'
 

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
