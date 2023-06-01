const CACHE_NAME = 'form-cache';


// URLs to cache

const urlsToCache = [
    '/',
    'https://msteams.zenya.work/api/portals/content_items?portal_id=183&include_icons=true&include_content_type=true&include_sub_type_field=true&sort=category,title&limit=100&fillable=true',
    'https://msteams.zenya.work/api/cases/reporter_forms/2220?include_design=true',
];

self.addEventListener('install', event => {

    event.waitUntil(
        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(urlsToCache);

            })
    );

});


self.addEventListener('fetch', event => {

    event.respondWith(
        caches.match(event.request)

            .then(response => {

                if (response) {

                    return response;

                }


                // Clone the request since it's a stream

                const requestClone = event.request.clone();


                return fetch(requestClone)

                    .then(response => {

                        if (!response || response.status !== 200 || response.type !== 'basic') {

                            return response;

                        }


                        // Clone the response since it's a stream

                        const responseClone = response.clone();


                        caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(event.request, responseClone);

                            });


                        return response;

                    });

            })
    );

});