self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('fuse-tester-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png',
                '/manifest.json',
                '/images/fuse.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});