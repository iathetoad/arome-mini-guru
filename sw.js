const C = 'arome-mini-guru-v5-1';
const ASSETS = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)))
);

self.addEventListener('activate', e =>
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== C).map(k => caches.delete(k)))
  ))
);

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Données API Open-Meteo : stale-while-revalidate, cache 10 min
  if (url.hostname === 'api.open-meteo.com') {
    e.respondWith(
      caches.open(C).then(async cache => {
        const cached = await cache.match(e.request);
        const fetchPromise = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => null);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Assets statiques : network first, fallback cache
  e.respondWith(
    fetch(e.request)
      .then(r => { const x = r.clone(); caches.open(C).then(c => c.put(e.request, x)); return r; })
      .catch(() => caches.match(e.request))
  );
});
