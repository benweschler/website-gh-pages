'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "02f900fd0e0e75761f05f232dd9f651d",
"/": "02f900fd0e0e75761f05f232dd9f651d",
"main.dart.js": "c9c348a24cea7dbb17e2158bba778937",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad85cb6a423719c51b1ba5bb74c90c7f",
"assets/AssetManifest.json": "6b8702746016cb93bad2a572b2eaddb9",
"assets/NOTICES": "158d32b1f537cc773faa4abdd104f693",
"assets/FontManifest.json": "38fc98e4c96bb4f2391b571b06f166f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "de32d2cdc2380583294cd15010b0ccce",
"assets/fonts/MaterialIcons-Regular.otf": "a7020de053b2c597c38e4776252cf845",
"assets/assets/resume.pdf": "17e5ab220a4b3b37fbe29fa841c4d9ac",
"assets/assets/showcase-media/layover-party/onboarding-three.webp": "90687aea451a355f59836633b02a3522",
"assets/assets/showcase-media/layover-party/onboarding-one.webp": "6c1500f3896a511d9f2be6dc127c3783",
"assets/assets/showcase-media/layover-party/search-bar.webp": "2e6ca87e280176bedd932f1de5cae94c",
"assets/assets/showcase-media/layover-party/trips.webp": "386002b3cfeaaadf8efd7ef13cb2af51",
"assets/assets/showcase-media/layover-party/trip-ticket.webp": "4167c963309057bf0a1ee5a8cf82fb3e",
"assets/assets/showcase-media/layover-party/onboarding-two.webp": "b312f582b6d85a3a1277d907d3d93d55",
"assets/assets/showcase-media/sportvue/light/dashboard-light.webp": "e2c8512d2ce933eb55ff72a43ac45172",
"assets/assets/showcase-media/sportvue/light/session-data-light.webp": "e9dbcc5e90f0d92815de5621a5ce0c91",
"assets/assets/showcase-media/sportvue/light/calendar-light.webp": "540287cd20ac1ec61a549d947e786755",
"assets/assets/showcase-media/sportvue/light/trends-light.webp": "a2093660d8fe53080a621de3a2f41bb9",
"assets/assets/showcase-media/sportvue/light/login-light.webp": "c7a62e7b7f06fa8808efb3135ab92ebd",
"assets/assets/showcase-media/sportvue/light/no-data-light.webp": "d8a2014e832cf28132873390724dad50",
"assets/assets/showcase-media/sportvue/light/profile-light.webp": "01b7d02fa9f43f2cd29c44b12234d932",
"assets/assets/showcase-media/sportvue/dark/no-data-dark.webp": "b24aa79bba592ff3fb2f4296d7e9fb49",
"assets/assets/showcase-media/sportvue/dark/calendar-dark.webp": "f3d73840d7a23da0d41c6d61c6f5e6ed",
"assets/assets/showcase-media/sportvue/dark/session-data-dark.webp": "8f92969db30720dfd0885aec1a2e585c",
"assets/assets/showcase-media/sportvue/dark/trends-dark.webp": "a1ffa6f5a99a10618c96933d6b832b06",
"assets/assets/showcase-media/sportvue/dark/login-dark.webp": "04b9fa1a9936c505a95d30a814b544d7",
"assets/assets/showcase-media/sportvue/dark/dashboard-dark.webp": "c866771baebea8e69d0e676e442f3d86",
"assets/assets/showcase-media/sportvue/dark/profile-dark.webp": "33ab8a26871741d1617a2c1c4a23c1af",
"assets/assets/showcase-media/allynd/onboarding-three.webp": "57198b8b066af7f997e5e96da6aef0ea",
"assets/assets/showcase-media/allynd/onboarding-one.webp": "136209be641f837ce0041d034c448557",
"assets/assets/showcase-media/allynd/login.webp": "9a2c78dd717f13b3b149ff51b57a7566",
"assets/assets/showcase-media/allynd/onboarding-two.webp": "c4d62f67fcb20ddc79fbf51b5f842a87",
"assets/assets/showcase-media/dragonator/light/roster-light.webp": "176d9f952532f9fdde8661a2c142a7f2",
"assets/assets/showcase-media/dragonator/light/settings-light.webp": "06cd7e40290de12de64a3e94220aa2bd",
"assets/assets/showcase-media/dragonator/light/create-paddler-light.webp": "df658631fface0ac69236698fb1b4b3c",
"assets/assets/showcase-media/dragonator/light/paddler-details-light.webp": "7027181b3a2882b1ce4d092dc0bea238",
"assets/assets/showcase-media/dragonator/light/edit-lineup-light.webp": "272dcb8dc22e6879d1a61fb358278942",
"assets/assets/showcase-media/dragonator/dark/create-paddler-dark.webp": "7e809e165122226a23f69942116f7d06",
"assets/assets/showcase-media/dragonator/dark/edit-lineup-dark.webp": "d60117dcccf51fa28e95cad41b610af0",
"assets/assets/showcase-media/dragonator/dark/paddler-details-dark.webp": "a2ee446ab1d1ca33295e95a057fd0969",
"assets/assets/showcase-media/dragonator/dark/settings-dark.webp": "741b91ef47c4af727e12d9b07f214645",
"assets/assets/showcase-media/dragonator/dark/roster-dark.webp": "37cfc59a9e1f6392df190b83b845fb48",
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
