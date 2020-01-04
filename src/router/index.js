import Vue from "vue";
import VueRouter from "vue-router";
import roters from "./module/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  ...roters,
  {
    path: "/404",
    name: "NotFound",
    meta: {
      permission: "public"
    },
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/common/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
