import '../assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
