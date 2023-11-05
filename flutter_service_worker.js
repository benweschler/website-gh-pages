'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "e12789bd8bc895c378f24e26b490e580",
"/": "e12789bd8bc895c378f24e26b490e580",
"main.dart.js": "3c9ca3dac0326f530a99aa2e0683250a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad85cb6a423719c51b1ba5bb74c90c7f",
"assets/AssetManifest.json": "efe2d9faed3c3d7969754766f10d523c",
"assets/NOTICES": "158d32b1f537cc773faa4abdd104f693",
"assets/FontManifest.json": "38fc98e4c96bb4f2391b571b06f166f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "507fd4a82b05d24e4c652849fd18d9e0",
"assets/fonts/MaterialIcons-Regular.otf": "a7020de053b2c597c38e4776252cf845",
"assets/assets/resume.pdf": "17e5ab220a4b3b37fbe29fa841c4d9ac",
"assets/assets/showcase-media/layover-party/onboarding-one.jpg": "6af31c0355da00c991065f6fac1b9420",
"assets/assets/showcase-media/layover-party/trips.jpg": "bf4fae6f1ecb5761fce33a038394a4ea",
"assets/assets/showcase-media/layover-party/onboarding-three.jpg": "096051f0b7a65972be9ead4edb3540fb",
"assets/assets/showcase-media/layover-party/search-bar.jpg": "99fa51aedb5f86a1c7dde5fa5f111f5d",
"assets/assets/showcase-media/layover-party/trip-ticket.jpg": "70923f1b0e5ace256b19d018a71c21ee",
"assets/assets/showcase-media/layover-party/onboarding-two.jpg": "7cbc3b40a384313f449a7f1c584fa5ef",
"assets/assets/showcase-media/sportvue/light/login-light.jpg": "40f59bb3e3ed36e2d47e58c97bad2b75",
"assets/assets/showcase-media/sportvue/light/dashboard-light.jpg": "09048bb5b1107e4df8372397a107d01b",
"assets/assets/showcase-media/sportvue/light/profile-light.jpg": "e3820ec5c3366524afceca563810f877",
"assets/assets/showcase-media/sportvue/light/no-data-light.jpg": "c3090917cca03810a2eea37ed8328819",
"assets/assets/showcase-media/sportvue/light/calendar-light.jpg": "cb24c705d50d4ada2bf0d9d4f7c97e62",
"assets/assets/showcase-media/sportvue/light/session-data-light.jpg": "03c13d35bdb0539aacae116c7f26cf86",
"assets/assets/showcase-media/sportvue/light/trends-light.jpg": "09b2fbd5abe9c299f5ff8bf491f85fd8",
"assets/assets/showcase-media/sportvue/dark/login-dark.jpg": "09b38ad86b24375b5a3d7acf03750659",
"assets/assets/showcase-media/sportvue/dark/calendar-dark.jpg": "f361d24e05690d5ac3298aa69e4826d7",
"assets/assets/showcase-media/sportvue/dark/trends-dark.jpg": "3abcb76fd91fd2e999d4fd5fd467dd16",
"assets/assets/showcase-media/sportvue/dark/session-data-dark.jpg": "f82ee6725701fb56f022d8a2a9df413d",
"assets/assets/showcase-media/sportvue/dark/profile-dark.jpg": "ec5f4cd05d7e2c7745d26a9318082cd6",
"assets/assets/showcase-media/sportvue/dark/no-data-dark.jpg": "3df0a40a9982bc3de4912df1c34488b2",
"assets/assets/showcase-media/sportvue/dark/dashboard-dark.jpg": "473ca63ecd3b206b57774184c096a181",
"assets/assets/showcase-media/allynd/onboarding-one.jpg": "613588197cc7de83585ab6a5cf5ddcd2",
"assets/assets/showcase-media/allynd/onboarding-three.jpg": "43cb9f9a7f20c1ce56532fe2aa98c796",
"assets/assets/showcase-media/allynd/login.jpg": "8998ea0fd14aba5010a9268acac87e21",
"assets/assets/showcase-media/allynd/onboarding-two.jpg": "b03b115e99e4978a3ee8708390677b56",
"assets/assets/showcase-media/dragonator/light/paddler-details-light.jpg": "846dba716911a13cac72ca7e23ce89cf",
"assets/assets/showcase-media/dragonator/light/settings-light.jpg": "d5f6c1204ba5f65ab286b8c17cfff17e",
"assets/assets/showcase-media/dragonator/light/roster-light.jpg": "b076381a0e5068c622627287b6e5191a",
"assets/assets/showcase-media/dragonator/light/create-paddler-light.jpg": "3b6ecfbea821f9e3bd388000c0ed3742",
"assets/assets/showcase-media/dragonator/light/edit-lineup-light.jpg": "8a92e0ba531fd951a11f847c1ebafaed",
"assets/assets/showcase-media/dragonator/dark/paddler-details-dark.jpg": "b16cde64d05a8a2574ed85e2511e37bd",
"assets/assets/showcase-media/dragonator/dark/create-paddler-dark.jpg": "a7328c4558c699515a834e81344d04e1",
"assets/assets/showcase-media/dragonator/dark/roster-dark.jpg": "fb44958112506dd8ba735d6bcd179f30",
"assets/assets/showcase-media/dragonator/dark/edit-lineup-dark.jpg": "6490edd0fb83b5c369c93881738ed6f1",
"assets/assets/showcase-media/dragonator/dark/settings-dark.jpg": "1cd92028323cf2a79f652da27bde05d2",
"assets/assets/devpost-logo.png": "28bfa6e42d6b287750c21a14dc7d2245",
"assets/assets/github-invertocat-logo.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/shaders/gradient.frag": "5e95036820c1a87d7cab7b26f2b09b42",
"assets/assets/shadertoy-logo.png": "06a6b18b915af55f530b206b16cc707a",
"assets/assets/fonts/libre-baskerville/LibreBaskerville-Italic.ttf": "432e7d14cf22f180b0269cf05defaeb1",
"assets/assets/fonts/libre-baskerville/LibreBaskerville-Regular.ttf": "fac7df0a4714aacd0bfbca6cf57a488c",
"assets/assets/fonts/libre-baskerville/LibreBaskerville-Bold.ttf": "365ef8f393445525c3a0b4830cb46d80",
"assets/assets/fonts/inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
