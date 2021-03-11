import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("@/views/Home") },
  { name: "Cart", path: "/cart", component: () => import("@/views/Cart") },
  { name: "SuccessPay", path: "/successpay", component: () => import("@/views/SuccessPay") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
