import * as vr from 'vue-router';
import login from '@/components/pages/login.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const Home = { template: '<div>Home</div>' };

const routes: vr.RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/login', name: "Login", component: login },
  { path: '/hello', name: "demo", component: HelloWorld },
];

export const router = vr.createRouter({
  history: vr.createWebHistory(),
  routes,
});

