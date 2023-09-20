const Layout = () => import('../Layouts/MainLayout')

/* Authentic View */
const Administration = () => import('../views/AdminPage.vue')

const adminChildRoutes = prop => [
  {
    path: 'administration',
    name: 'administration',
    component: Administration
  }
]

export default [
  {
    path: '/',
    name: 'admin',
    component: Layout,
    meta: { auth: true },
    children: adminChildRoutes()
  }
]
