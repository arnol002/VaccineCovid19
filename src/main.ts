import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.use(router)

app.mount('#app')
