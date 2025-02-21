import '../assets/main.css'

import { createApp } from "vue";

import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).mount('#app')
