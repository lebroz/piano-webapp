self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/public/css/styles.css',
                '/app.js',
                '/js/index.js',
                '/public/assets/do.wav',
                '/public/assets/re.wav',
                '/public/assets/mi.wav',
                '/public/assets/fa.wav',
                '/public/assets/sol.wav',
                '/public/assets/la.wav',
                '/public/assets/si.wav',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
    );
});
