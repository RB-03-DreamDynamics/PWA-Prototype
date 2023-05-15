import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'PWA-Prototype',
        short_name: 'PWA-Prototype',
        start_url: '/',
        description: 'A Vue.js 3 PWA Prototype',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '/img/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: '/img/icons/mstile-150x150.png',
            sizes: '270x270',
            type: 'image/png'
          },
          {
            src: '/img/icons/safari-pinned-tab.svg',
            sizes: '16x16',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,png,jpg,jpeg,svg,gif,ico,webp,webmanifest,woff,woff2,ttf,otf}'
        ]
      }
    })
  ],
  server: {
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
    assetsDir: 'assets',
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    manifest: true,
    emptyOutDir: true,
  },
  define: {
    'process.env': {
      BASE_URL: JSON.stringify(process.env.BASE_URL),
    }
  }
})
