import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/news",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter: (to, from, next) => {
      // 局部路由守卫
      if (to.path === "/login") {
        // 登陆页面白名单
        next();
        return;
      }
      let loginState = window.localStorage.getItem("token");
      let _idState = window.localStorage.getItem("_id");
      if (loginState && _idState) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      {
        path: "/news",
        redirect: "/newslist",
        component: () => import("../views/News.vue"),
        children: [
          {
            path: "/newslist",
            component: () => import("../views/NewsList.vue"),
          },
          {
            path: "/netlist",
            component: () => import("../views/NetList.vue"),
          },
        ],
      },
      { path: "/spider", component: () => import("../views/Spider.vue") },
      { path: "/user", component: () => import("../views/User.vue") },

      // ...其他子路由
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
