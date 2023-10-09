'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "4df40874048b326d04c6b3a686490fab",
"/": "4df40874048b326d04c6b3a686490fab",
"main.dart.js": "8a9166574d3ab5e4d287653d69c21f54",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad85cb6a423719c51b1ba5bb74c90c7f",
"assets/AssetManifest.json": "0fc423eba0379f6a216c7b2840e3dbcb",
"assets/NOTICES": "158d32b1f537cc773faa4abdd104f693",
"assets/FontManifest.json": "38fc98e4c96bb4f2391b571b06f166f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1bbb4379cdeec48887a9ad352c595fda",
"assets/fonts/MaterialIcons-Regular.otf": "a7020de053b2c597c38e4776252cf845",
"assets/assets/resume.pdf": "17e5ab220a4b3b37fbe29fa841c4d9ac",
"assets/assets/showcase-media/layover-party/onboarding-one.png": "d017315ae738af8c2301448cba140a29",
"assets/assets/showcase-media/layover-party/trips.png": "f8af898f5ec2f023e2655853c33c718e",
"assets/assets/showcase-media/layover-party/onboarding-three.png": "51d60de4cf88c0937b8208ecbe50d065",
"assets/assets/showcase-media/layover-party/search-bar.png": "93bed7d8397f0186d8261762463a1d09",
"assets/assets/showcase-media/layover-party/trip-ticket.png": "3cb2295d9ae5bf3485ea79b6690d9fc6",
"assets/assets/showcase-media/layover-party/onboarding-two.png": "5c188b9c604177c5345f4f769cc5ef2c",
"assets/assets/showcase-media/sportvue/light/login-light.png": "986913b63e96845cd6903d71529d01f4",
"assets/assets/showcase-media/sportvue/light/dashboard-light.png": "4b8bb59783ee326be51695c763fbd53a",
"assets/assets/showcase-media/sportvue/light/profile-light.png": "093eef93b54973562006557f93f8df51",
"assets/assets/showcase-media/sportvue/light/no-data-light.png": "6c422942a99ce059f12b12cb9d2f1e8f",
"assets/assets/showcase-media/sportvue/light/calendar-light.png": "4dc46513f71ade22c0a838acdafa6fc6",
"assets/assets/showcase-media/sportvue/light/session-data-light.png": "1eb8fb374b85f9a56e17fe750f59f23e",
"assets/assets/showcase-media/sportvue/light/trends-light.png": "bb517ec8ed2b10b77fb64c1c37fcbef5",
"assets/assets/showcase-media/sportvue/dark/login-dark.png": "3c078afa86ab5f4b29ae4e6334692e9d",
"assets/assets/showcase-media/sportvue/dark/calendar-dark.png": "6023579f9d30ab1b64d0752f2cd622dc",
"assets/assets/showcase-media/sportvue/dark/trends-dark.png": "d4e84d605e658ef16f06d892b2dc5575",
"assets/assets/showcase-media/sportvue/dark/session-data-dark.png": "46ecf2c8bc8b93b918c444c975d4ab33",
"assets/assets/showcase-media/sportvue/dark/profile-dark.png": "6d39ff7effc850ce6709704b1798bc96",
"assets/assets/showcase-media/sportvue/dark/no-data-dark.png": "ac5c10dc03244d3d9b462dc8a073952a",
"assets/assets/showcase-media/sportvue/dark/dashboard-dark.png": "3233215af33e0a567a96a838664c71c5",
"assets/assets/showcase-media/allynd/onboarding-one.png": "4f80c097733d1802aeaecd839d340b52",
"assets/assets/showcase-media/allynd/onboarding-three.png": "bb2684b6b47d49b592528813062c6c4a",
"assets/assets/showcase-media/allynd/login.png": "10f364f02baf209569042856b944f001",
"assets/assets/showcase-media/allynd/onboarding-two.png": "bfbfda03f023237eb2e05a65f84694c5",
"assets/assets/showcase-media/dragonator/light/paddler-details-light.png": "0f5435021a62d38b33f1418f7867460d",
"assets/assets/showcase-media/dragonator/light/settings-light.png": "331011b7c4e95cfd9634c5f39ed31a1b",
"assets/assets/showcase-media/dragonator/light/roster-light.png": "01324b1232a819e1bf965757d355f1ef",
"assets/assets/showcase-media/dragonator/light/create-paddler-light.png": "002d644da9a706d2bdf2e7ef30fecc48",
"assets/assets/showcase-media/dragonator/light/edit-lineup-light.png": "84fc913051c3c3014de7db9bc90105fb",
"assets/assets/showcase-media/dragonator/dark/paddler-details-dark.png": "49192c27ac663dcec2091ecce98a3bc0",
"assets/assets/showcase-media/dragonator/dark/create-paddler-dark.png": "1e00daca61c168cadb81e6a6e3c10dde",
"assets/assets/showcase-media/dragonator/dark/edit-lineup-dark.png": "6cca0e3f42a71237e0ccbbe0273ffc60",
"assets/assets/showcase-media/dragonator/dark/roster-dark.png": "ab288f319ad9a211181c2ab8a2e27fba",
"assets/assets/showcase-media/dragonator/dark/settings-dark.png": "01fb2df85ebc08e3804b4db19df2b6bc",
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
