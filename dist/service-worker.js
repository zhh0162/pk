const CACHE_NAME = "growpet-beta2-device-trial-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./data/evolution-system.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/pets/rabbit/default/rabbit-stage1-default.png",
  "./assets/pets/rabbit/default/rabbit-stage2-default.png",
  "./assets/pets/rabbit/default/rabbit-stage3-default.png",
  "./assets/pets/cat/default/cat-stage1-default.png",
  "./assets/pets/cat/default/cat-stage2-default.png",
  "./assets/pets/cat/default/cat-stage3-default.png",
  "./assets/pets/pig/default/pig-stage1-default.png",
  "./assets/pets/pig/default/pig-stage2-default.png",
  "./assets/pets/pig/default/pig-stage3-default.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "GET_CACHE_VERSION") {
    event.source?.postMessage({ type: "CACHE_VERSION", cacheName: CACHE_NAME });
  }
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
