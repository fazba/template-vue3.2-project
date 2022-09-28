import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/pages/home/Index.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') return next()
  if (sessionStorage.getItem('userType') == null) return next('/login')
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/')
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
