var cacheName = "dmbssw-v0";
var cacheUrls = [
  "/",
  "index.html"
];
//
//
// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       return cache.addAll(cacheUrls)
//     })
//   );
// });
//
// self.addEventListener("activate", (e) => {
//   e.waitUntil(
//     caches.keys().then((all) => Promise.all(all.filter(c => c !== cacheName && c.startsWith(c.slice(0, 5))).map(c => caches.delete(c))))
//   );
// });
//
// self.addEventListener("fetch", (e) => {
//   console.log(e.request.url);
//   e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
// });
//
//
// self.addEventListener("message", function (e) {
//   if (e.data.skip) {
//     self.skipWaiting();
//   }
// });