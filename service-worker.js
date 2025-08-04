const CACHE_NAME = 'hive-cache-v1';
const urlsToCache = [
  '/hive-dating/',
  '/hive-dating/index.html',
  '/hive-dating/manifest.json',
  '/hive-dating/service-worker.js',
  'https://cdn.tailwindcss.com',
  'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3bDkLh-hT7EwA.woff2',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
