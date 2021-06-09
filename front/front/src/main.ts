import { createApp } from 'vue';
import App from './App.vue';
import * as router from '@/router/index';
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

createApp(App)
  .use(router.router)
  .use(PrimeVue)
  .component('InputText', InputText)
  .component('textArea', textArea)
  .component('FileUpload', FileUpload)
  .component('Button', Button)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .mount('#app');