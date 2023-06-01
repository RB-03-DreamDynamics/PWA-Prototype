import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import QRLogin from '../views/qrlogin.vue';
import LoginChoice from '../views/loginchoice.vue';
import Dashboard from '../views/dashboardView.vue';
import FormCreateView from '../views/formCreateView.vue';
import logout from '../components/Auth/logout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },  
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
  },
  {
    path: '/form/create/:form_id',
    name: 'FormCreate',
    component: FormCreateView,
    props: true,
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (!to.path.startsWith('/login') && !token) {
    next('/login');
  }else if(to.path.startsWith('/login') && token){
    next('/dashboard');
  }else{
    next();
  }
});
export default router;
