// import { createRouter, createWebHistory } from 'vue-router'
// import Landing from '../views/LandingPage'
// import About from '../views/AboutPage'
// import Resources from '../views/ResourcesPage'
// import Login from '../views/Auth/LoginPage'




// const routes = [
//   {
//     path: '/',
//     name: 'landing',
//     component: Landing
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: About
//   },
//   {
//     path: '/resources',
//     name: 'resources',
//     component: Resources
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router'
import AuthRoute from './AuthRoute'
import IntroductionRoute from './IntroductionRoute'


/* Layouts */
const MainLayout = () => import('../Layouts/MainLayout.vue')

/* Dashboards View */
const Landing = () => import('../views/LandingPage.vue')


const routes = [
  {
    path: '',
    name: 'landing',
    component: MainLayout,
    redirect: "/landing",
    children: [
      {
        path: '/landing',
        name: 'landing',
        component: Landing,
      }
    ]
  },
  ...AuthRoute,
  ...IntroductionRoute
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

