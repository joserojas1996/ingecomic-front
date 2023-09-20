import store from '@/store'
export default async (to, from, next) => {
console.log(from)
  let check = await store.getters('check')
  if (check) {
    if (check.status === 401) {
      next('/auth/login')
    } else if (check === 200 && to.path === '/auth/login') {
      next('/')
    } else {
      next()
    }
  } else {
    next('/auth/login')
  }

}