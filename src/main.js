import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import App from './App.vue'
import router from './router'

const app = createApp(App)
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "@icon-park/vue-next/styles/index.css";
import ElementPlus from 'element-plus';
app.use(createPinia())
app.use(router);
app.use(ElementPlus);
app.use(Toast);
app.mount('#app')
