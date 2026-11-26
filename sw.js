/* Offline cache: network-first (always fresh online), cache fallback offline */
var CACHE = 'umlaut-v25';
var ASSETS = [
  './', 'index.html', 'css/app.css',
  'js/data/dsl.js', 'js/data/b1.js', 'js/data/b2.js', 'js/data/b1x.js', 'js/data/b2x.js',
  'js/data/more-b1.js', 'js/data/more-b2.js', 'js/data/c1.js', 'js/data/context.js', 'js/data/tips-plus.js', 'js/data/chapters.js', 'js/data/words.js', 'js/data/why.js', 'js/data/c1-plus.js', 'js/data/match-notes.js', 'js/vocab.js', 'js/store.js', 'js/i18n.js', 'js/sound.js', 'js/backup.js', 'js/lesson.js', 'js/app.js',
  'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS.map(function (u) { return new Request(u, { cache: 'reload' }); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
        return hit || caches.match('index.html');
      });
    })
  );
});
