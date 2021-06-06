import { createApp } from 'vue';
import * as vr from 'vue-router';
import App from './App.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };
const routes: vr.RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = vr.createRouter({
  history: vr.createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app');
