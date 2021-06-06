import { createApp } from 'vue';
import App from './App.vue';
import * as router from '@/router/index';

createApp(App).use(router.router).mount('#app');
