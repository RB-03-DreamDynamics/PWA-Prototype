import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import './registerServiceWorker.js'

import { VitePWA } from 'vite-plugin-pwa'
import { registerSW } from 'virtual:pwa-register'


const app = createApp(App)

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



