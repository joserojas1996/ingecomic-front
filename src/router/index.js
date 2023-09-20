import { createRouter, createWebHistory } from 'vue-router'
import AuthRoute from './AuthRoute'
import IntroductionRoute from './IntroductionRoute'
import AdminRoute from './AdminRoute'

import store from '@/store'

/* Layouts */
const MainLayout = () => import('../Layouts/MainLayout.vue')

/* Dashboards View */
const Landing = () => import('../views/LandingPage.vue')
const Administration = () => import('../views/AdminPage.vue')
const Admins = () => import('../views/Admin/AdminsPage.vue')
const Sections = () => import('../views/Admin/SectionsPage.vue')
const Students = () => import('../views/Admin/StudentPage.vue')
const Teachers = () => import('../views/Admin/TeacherPage.vue')
const UsersPublic = () => import('../views/Admin/UserPublicPage.vue')
const ResourcesContent = () => import('../views/ResourcesContent.vue')
const TestIndex = () => import('../views/Tests/index.vue')
const Evaluation = () => import('../views/Tests/selected-easy.vue')






const Error = () => import('../views/Errors/ErrorPage.vue')

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
      },
      {
        path: '/administration',
        name: 'administration',
        component: Administration,
      },
      {
        path: '/admins',
        name: 'admins',
        component: Admins,
      },
      {
        path: '/sections',
        name: 'sections',
        component: Sections,
      },
      {
        path: '/students',
        name: 'students',
        component: Students,
      },
      {
        path: '/teachers',
        name: 'teachers',
        component: Teachers,
      },
      {
        path: '/user-public',
        name: 'user-public',
        component: UsersPublic,
      },
      {
        path: '/resources-content',
        name: 'resources-content',
        component: ResourcesContent,
      },
      {
        path: '/test-list',
        name: 'test-list',
        component: TestIndex,
      },
      {
        path: '/evaluation',
        name: 'evaluation',
        component: Evaluation,
      }
    ]
  },
  ...AuthRoute,
  ...IntroductionRoute,
  {
    path: '/page-not-found',
    component: Error
  },
  { path: '/:pathMatch(.*)*', redirect: '/page-not-found' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {

  if(!store.getters['check']){
    await store.dispatch('fetchUser')
  }

  if (to.meta.auth && store.getters['check'] && to.path === "/register") {
    next({ to: '/' })
  } else if (to.meta.auth && store.getters['check'] && to.path === "/login") {
    next({ to: '/' })
  } else if (to.meta.auth && store.getters['check']) {
    next()
  } else {
    next()
  }
})

export default router

