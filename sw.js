var CACHE_VERSION = 'v1';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function (cache) {
            return cache.addAll([
                '/assets/web/assets/mobirise-icons/mobirise-icons.css',
                '/assets/bootstrap/css/bootstrap.min.css',
                '/assets/bootstrap/css/bootstrap-grid.min.css',
                '/assets/bootstrap/css/bootstrap-reboot.min.css',
                '/assets/bootstrap/js/bootstrap.min.js',
                '/assets/tether/tether.min.css',
                '/assets/socicon/css/styles.css',
                '/assets/theme/css/style.css',
                '/assets/fonts/font.css',
                '/assets/mobirise/css/mbr-additional.css',
                '/assets/mobirise/css/mbr-additional.css',
                '/assets/animate/animate.min.css',
                '/assets/web/assets/jquery/jquery.min.js',
                '/assets/popper/popper.min.js',
                '/assets/tether/tether.min.js',
                '/assets/smoothscroll/smooth-scroll.js',
                '/assets/theme/js/script.js'
            ]).catch(function (error) {
                console.error('Error in install handler:', error);
            });
        })
    );
});