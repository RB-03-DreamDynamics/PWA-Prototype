import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

import { VitePWA } from 'vite-plugin-pwa'
import { registerSW } from 'virtual:pwa-register'


const app = createApp(App)

app.use(createPinia())

registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
})

app.mount('#app')



