/* eslint-disable no-console */

import { register } from 'register-service-worker'

console.log('registerServiceWorker.js: ' + process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  register(`/sw.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      self.addEventListener('install', event => {
        event.waitUntil(
            caches.open('fontys-form')
                .then(cache => {
                  return cache.addAll([
                    'https://msteams.zenya.work/api/portals/content_items?portal_id=183&include_icons=true&include_content_type=true&include_sub_type_field=true&sort=category,title&limit=100&fillable=true',
                    'https://msteams.zenya.work/api/cases/reporter_forms/2220?include_design=true',
                  ]);
                })
        );
      });

      self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                  return response || fetch(event.request);
                })
        );
      });
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
