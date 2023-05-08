import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import QRLogin from '../views/qrlogin.vue';
import LoginChoice from '../views/loginchoice.vue';
import Dashboard from '../views/dashboard.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login/credentials',
    name: 'Login',
    component: Login
  },
  {
    path: '/login/qr',
    name: 'QR-login',
    component: QRLogin
  },
  {
    path: '/login',
    name: 'Login-choice',
    component: LoginChoice
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
