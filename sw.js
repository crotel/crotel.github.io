var CACHE_VERSION = 'v1';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function (cache) {
            return cache.addAll([
                'https://cdn.jsdelivr.net/gh/crotel/dev@fbbfefb/style.css',
                'https://cdn.jsdelivr.net/gh/crotel/dev@fbbfefb/font.css',
                'https://cdn.jsdelivr.net/gh/crotel/dev@fbbfefb/main.js'
            ]).catch(function (error) {
                console.error('Error in install handler:', error);
            });
        })
    );
});
