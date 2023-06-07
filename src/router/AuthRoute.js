const AuthLayout = () => import('../Layouts/AuthLayout')

/* Authentic View */
const SignIn = () => import('../views/Auth/LoginPage.vue')
const SignUp = () => import('../views/Auth/RegisterPage.vue')

const authChildRoutes = prop => [
  {
    path: 'login',
    name: 'login',
    component: SignIn
  },
  {
    path: 'register',
    name: 'register',
    component: SignUp
  }
]

export default [
  {
    path: '/',
    name: 'auth',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes()
  }
]
