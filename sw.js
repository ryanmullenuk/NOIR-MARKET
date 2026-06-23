const CACHE_NAME='noir-market-v7.7';
const CORE_ASSETS=['./','./index.html','./styles.css','./game.js','./manifest.json','./assets/logo-splash.png','./assets/logo.png','./assets/redhead-games-logo.png'];
const OPTIONAL_ASSETS=['./assets/video/powder-splash-poster.jpg','./assets/uk-start-map.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./apple-touch-icon-dark.png','./apple-touch-icon-light.png','./icon-192-light.png','./icon-512-light.png'];
function cacheAsset(cache,asset){return cache.add(asset).catch(function(){return null;});}
self.addEventListener('install',function(event){
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
    return Promise.all(CORE_ASSETS.map(function(asset){return cacheAsset(cache,asset);})).then(function(){
      return Promise.all(OPTIONAL_ASSETS.map(function(asset){return cacheAsset(cache,asset);}));
    });
  }));
  self.skipWaiting();
});
self.addEventListener('activate',function(event){
  event.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE_NAME;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});
self.addEventListener('fetch',function(event){
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(function(response){
    var copy=response.clone();
    caches.open(CACHE_NAME).then(function(cache){cache.put(event.request,copy).catch(function(){});});
    return response;
  }).catch(function(){return caches.match(event.request).then(function(cached){return cached||caches.match('./index.html');});}));
});
