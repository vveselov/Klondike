const CACHE_NAME = "klondike-v1";
const PRECACHE_ASSETS = [
  ".",
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "maskable-icon.png",
  "apple-touch-icon.png",
  "assets/card-back-ai.png",
  "assets/cards/10_of_clubs.png",
  "assets/cards/10_of_diamonds.png",
  "assets/cards/10_of_hearts.png",
  "assets/cards/10_of_spades.png",
  "assets/cards/2_of_clubs.png",
  "assets/cards/2_of_diamonds.png",
  "assets/cards/2_of_hearts.png",
  "assets/cards/2_of_spades.png",
  "assets/cards/3_of_clubs.png",
  "assets/cards/3_of_diamonds.png",
  "assets/cards/3_of_hearts.png",
  "assets/cards/3_of_spades.png",
  "assets/cards/4_of_clubs.png",
  "assets/cards/4_of_diamonds.png",
  "assets/cards/4_of_hearts.png",
  "assets/cards/4_of_spades.png",
  "assets/cards/5_of_clubs.png",
  "assets/cards/5_of_diamonds.png",
  "assets/cards/5_of_hearts.png",
  "assets/cards/5_of_spades.png",
  "assets/cards/6_of_clubs.png",
  "assets/cards/6_of_diamonds.png",
  "assets/cards/6_of_hearts.png",
  "assets/cards/6_of_spades.png",
  "assets/cards/7_of_clubs.png",
  "assets/cards/7_of_diamonds.png",
  "assets/cards/7_of_hearts.png",
  "assets/cards/7_of_spades.png",
  "assets/cards/8_of_clubs.png",
  "assets/cards/8_of_diamonds.png",
  "assets/cards/8_of_hearts.png",
  "assets/cards/8_of_spades.png",
  "assets/cards/9_of_clubs.png",
  "assets/cards/9_of_diamonds.png",
  "assets/cards/9_of_hearts.png",
  "assets/cards/9_of_spades.png",
  "assets/cards/ace_of_clubs.png",
  "assets/cards/ace_of_diamonds.png",
  "assets/cards/ace_of_hearts.png",
  "assets/cards/ace_of_spades.png",
  "assets/cards/jack_of_clubs.png",
  "assets/cards/jack_of_diamonds.png",
  "assets/cards/jack_of_hearts.png",
  "assets/cards/jack_of_spades.png",
  "assets/cards/king_of_clubs.png",
  "assets/cards/king_of_diamonds.png",
  "assets/cards/king_of_hearts.png",
  "assets/cards/king_of_spades.png",
  "assets/cards/queen_of_clubs.png",
  "assets/cards/queen_of_diamonds.png",
  "assets/cards/queen_of_hearts.png",
  "assets/cards/queen_of_spades.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
