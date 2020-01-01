import Vue from "vue";
import VueRouter from "vue-router";
import about from "./module/about.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  ...about
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
