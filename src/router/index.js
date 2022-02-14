import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Menu1 from '../views/Menu1.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "Setting" */ '../views/Setting.vue'),
  },
  {
    path: '/menu1',
    name: 'Menu1',
    component: Menu1,
  },
  {
    path: '/menu2',
    name: 'Menu2',
    component: () => import(/* webpackChunkName: "Menu2" */ '../views/Menu2.vue'),
  },
  {
    path: '/menu3',
    name: 'Menu3',
    component: () => import(/* webpackChunkName: "Menu3" */ '../views/Menu3.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;
