import { createApp } from 'vue';
import App from './App.vue';
import * as router from '/@/router/index';
// Auth Block
import * as Auth0Plugin from '/@/auth'
import authConfig from '/@/auth/auth_config.json'

// PrimeVue Block
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import textArea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css';


const app = createApp(App)
  .use(router.router)
  .use(PrimeVue);

Auth0Plugin.setupAuth(authConfig, (appState: any) => {
  router.router.push(appState && appState.targetUrl ? appState.targetUrl : '/')
}).then((auth) => {
  app.use(auth)
})

app.component('InputText', InputText)
  .component('textArea', textArea)
  .component('FileUpload', FileUpload)
  .component('Button', Button)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .mount('#app');