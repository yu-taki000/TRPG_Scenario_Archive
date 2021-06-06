import { createApp } from 'vue'
import App from './App.vue'
import * as  vr from 'vue-router'
''
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const routes:vr.RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
  

const router = vr.createRouter(
    {
     history:vr.createWebHistory(),
     routes:routes
    }
)
createApp(App).use(router).mount('#app')
