'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "addInterests.dart": "488a0b4bb0412cc0dacde690f851287a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "aaf84ee34031b815bfa06c3084b8308a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"bottomNavigationBar.dart": "94159aaa7da97fb722994066251a8947",
"calendar.dart": "f02198d7d9bf0e2ccfde534028a3b392",
"index.html": "ea1900ce50ed70425579b3366e055b75",
"/": "ea1900ce50ed70425579b3366e055b75",
"journal.dart": "9fb331877eb2accdc3770614b6812272",
"main.dart": "6f7a1fd011546595192cd452f14eddbc",
"main.dart.js": "e436bcd0c1322576cbd99f332758b021",
"newJournalEntry.dart": "ff8c9fc6deab6c23eac7f06cc4d874ae",
"viewInterests.dart": "685e70fe6da462048c7d3fa3b5a5c25d",
"viewProfile.dart": "e1d152ab02ed7637efb060a6b2313727"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
