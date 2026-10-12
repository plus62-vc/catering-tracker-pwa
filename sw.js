self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('catering-store-v3').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/icon.svg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
