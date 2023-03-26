import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import piniaPersist from 'pinia-plugin-persist'

import './assets/main.css'
import '@/assets/fonts/iconfont.css'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(ElementPlus)


app.mount('#app')
