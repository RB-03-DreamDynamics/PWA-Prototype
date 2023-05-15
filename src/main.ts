import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.scss'
import './registerServiceWorker.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './router'
import { VitePWA } from 'vite-plugin-pwa'
import { registerSW } from 'virtual:pwa-register'


const app = createApp(App).use(router)

app.use(createPinia())

console.log('VitePWA: ')

// add service worker to app
if (import.meta.env.PROD) {
    console.log('VitePWA: PROD')
    registerSW({
        immediate: true,
        onNeedRefresh() {
            console.log('onNeedRefresh')
            // show a prompt to user
        },
        onOfflineReady() {
            // show a ready to work offline to user
            console.log('onOfflineReady')
        },
    })
}


app.mount('#app')



