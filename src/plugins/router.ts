import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Index.vue"),
    },
    {
      path: "/Login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next("/");
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
