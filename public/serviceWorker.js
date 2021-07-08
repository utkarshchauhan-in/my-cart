const staticCart = "my-cart-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/js/app.js",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "favicon-16x16.png",
  "/apple-touch-icon.png",
  "/favicon-32x32.png",
  "/favicon.ico"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCart).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })