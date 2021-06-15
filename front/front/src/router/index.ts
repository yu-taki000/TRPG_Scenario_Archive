import * as vr from 'vue-router';
import * as auth from '/@/auth';
import login from '/@/components/pages/login.vue'
import senario from '/@/components/pages/senario.vue'
import Upload from '/@/components/pages/upload.vue';

const Home = { template: '<div>Home</div>' };

type PathList = "top" | "login" | "senario" | "upload"
type PathInfos = {
  [T in PathList]: {
    name: T
    path: `/${string}`,
    component: vr.RouteComponent
  }
}
const routeList: PathInfos = {
  top: {
    name: "top",
    path: "/",
    component: login
  },
  login: {
    name: "login",
    path: "/login",
    component: login
  },
  senario: {
    name: "senario",
    path: "/senario",
    component: senario
  },
  upload: {
    name: "upload",
    path: "/upload",
    component: Upload
  }
}
const routes: vr.RouteRecordRaw[] = Object.values(routeList);

export const router = vr.createRouter({
  history: vr.createWebHistory(),
  routes,
});

router.beforeEach(auth.routeGuard);
