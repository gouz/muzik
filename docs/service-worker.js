(()=>{let a=[],e="";a=["index.html","muzik.d5aabbb3.png","muzik.4aab518f.png","muzik.d3dc537c.png","muzik.863d6099.webmanifest","muzik.d4e52390.webp","muzik.fa118ea1.png","muzik.5528670a.webp","muzik.310e9c27.png","muzik.aa5f1bee.webp","muzik.f616dabc.png","muzik.9f48bf4c.xml","muzik.c7d24f73.png","muzik.a03dd834.png","muzik.7cc17567.png","muzik.f44cfe77.png","index.401784a6.js","index.8221a881.css"],e="2e8d5c5a",addEventListener("install",(c=>c.waitUntil(async function(){const c=await caches.open(e);await c.addAll(a)}()))),addEventListener("activate",(a=>a.waitUntil(async function(){const a=await caches.keys();await Promise.all(a.map((a=>a!==e&&caches.delete(a))))}()))),addEventListener("fetch",(a=>{a.respondWith(async function(){try{var e=await fetch(a.request);return(await caches.open("cache")).put(a.request.url,e.clone()),e}catch(e){return caches.match(a.request)}}())}))})();