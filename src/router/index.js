import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
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
        path: "/home",
        component: () => import("../views/Mine.vue"),
        meta: { title: "系统主页" },
      },
      {
        path: "/news",
        redirect: "/newslist",
        component: () => import("../views/News.vue"),
        children: [
          {
            path: "/newslist",
            component: () => import("../views/NewsList.vue"),
            meta: { title: "新闻管理" },
          },
          {
            path: "/netlist",
            component: () => import("../views/NetList.vue"),
            meta: { title: "媒体管理" },
          },
        ],
      },
      {
        path: "/spider",
        component: () => import("../views/Spider.vue"),
        meta: { title: "爬虫管理" },
      },
      {
        path: "/todo",
        component: () => import("../views/Todo.vue"),
        meta: { title: "Todo应用" },
      },
      {
        path: "/user",
        component: () => import("../views/User.vue"),
        meta: { title: "用户管理" },
      },

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
