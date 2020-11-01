var CACHE_NAME  = 'BDGFANS202010';

var urlsToCache = [
  '/',
  'js/app.js',
  'img/boardgames.jpg',
  'img/dice.jpg',
  'img/event.jpg',
  'img/usericon.jpeg',
  'img/01.png',
  'img/02.png',
  'img/03.png',
  'img/04.png',
  'img/05.png',
  'img/06.png',
  'img/07.png',
  'img/08.png',
  'img/09.png',
  'img/10.png',
  'img/11.png',
  'https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofINeaBTMnFcQ.woff2',
  'https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache){
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        if(response){
          return response;
        }
        return fetch(event.request);
      })
  );
});