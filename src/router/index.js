import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/game-overview',
    name: 'Game overview',
    component: () => import('../views/Game.vue'),
  },
  {
    path: '/messagelogs',
    name: 'Logs',
    component: () => import('../views/dev/MessageLogs.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/ChatRoom.vue'),
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/UserAddCards.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
