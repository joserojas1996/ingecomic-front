const Layout = () => import('../Layouts/MainLayout')

/* Authentic View */
const About = () => import('../views/AboutPage.vue')
const Resources = () => import('../views/ResourcesPage.vue')


const aboutChildRoutes = prop => [
  {
    path: 'about',
    name: 'about',
    component: About
  },
  {
    path: 'resources',
    name: 'resources',
    component: Resources
  }
]

export default [
  {
    path: '/',
    name: 'introduction',
    component: Layout,
    meta: { auth: true },
    children: aboutChildRoutes()
  }
]
