import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home", 
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sessions",
    name: "Sessions",
    component: () => import("../views/Sessions.vue"),
  },
  {
    path: "/itemtest",
    name: "Item tests",
    component: () => import("../views/ItemTestView.vue"),
  },
  {
    path: "/game-overview",
    name: "Game overview",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/messagelogs",
    name: "Logs",
    component: () => import("../views/dev/MessageLogs.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/ChatRoom.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
