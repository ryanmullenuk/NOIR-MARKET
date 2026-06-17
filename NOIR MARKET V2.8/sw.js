const CACHE_NAME='noir-market-v2-8';
const CORE_ASSETS=['./','./index.html','./styles.css','./game.js','./manifest.json','./assets/logo.png'];
const OPTIONAL_ASSETS=['./icon-192.png','./icon-512.png','./apple-touch-icon.png','./apple-touch-icon-dark.png','./apple-touch-icon-light.png','./icon-192-light.png','./icon-512-light.png'];
self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>
      cache.addAll(CORE_ASSETS).then(()=>
        Promise.allSettled(OPTIONAL_ASSETS.map(asset=>cache.add(asset)))
      )
    )
  );
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
