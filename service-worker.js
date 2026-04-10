const CACHE_NAME = "pokemon-type-app-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js"
];

// Install: cache essential files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch: serve cached files if offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});