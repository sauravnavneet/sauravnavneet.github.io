'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e963150be112d08338d0412f28eb037a",
"assets/AssetManifest.bin.json": "806e082b0f5a37696938f87c1e827ec7",
"assets/AssetManifest.json": "18fb304287f1fc0d8773180e1ea10b89",
"assets/assets/certifications/hackerrank.svg": "a5cb16e0ae6ed3b0c2d9b93d6b2128dd",
"assets/assets/certifications/simplilearn.png": "3ce354eb23bf8a386d5e686519b46ef2",
"assets/assets/certifications/Simplilearn.svg": "72914522add33c249015dd95f6c9e7bc",
"assets/assets/certifications/simplilearn2.svg": "72914522add33c249015dd95f6c9e7bc",
"assets/assets/certifications/testdome.svg": "4ed3896dd7d61bbe55ef3188fbcc4eb9",
"assets/assets/certifications/udemy.svg": "f7d2b16025a07a0bbece82dd10dcc132",
"assets/assets/fonts/Urbanist-Black.ttf": "06b9bd346b763cf5ad3cc2ace60a2f21",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-ExtraBold.ttf": "f4a05764495d2286312d1c6edd9513b4",
"assets/assets/fonts/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/icons/analytics.svg": "49cde000806e8c8283c412ded131c1d0",
"assets/assets/icons/arrow-right.svg": "c84e91d4e4920ff37859e9d167d9d68b",
"assets/assets/icons/call.svg": "fdb1ff06a6565d880944d616b6722846",
"assets/assets/icons/calls.svg": "e0e4d26a8ef94fed2511c8d8fd552103",
"assets/assets/icons/certificate.svg": "6e51290a74736a7b639a90513e932579",
"assets/assets/icons/email.svg": "88af28a26f32eac8f4ae33291c5ae5b6",
"assets/assets/icons/experience.svg": "c078c5310a2ebde75b2ac3b1d83e6ea5",
"assets/assets/icons/github.svg": "b7c0164bf46fcd949cb6999d40123104",
"assets/assets/icons/instagram.svg": "a4ec6f3e530caf5dd4142c756a547b1e",
"assets/assets/icons/kaggle.svg": "12937cfe0d9ff9431856a414fc6ff875",
"assets/assets/icons/linkedin.svg": "b366644d04a64ef14c2911cc9c6f14eb",
"assets/assets/icons/profile.svg": "9a515c0e7a89033547d4d80cafe5c518",
"assets/assets/icons/whatsapp-logo.svg": "602b515d88e9aa272e70208d4e3ea5d2",
"assets/assets/icons/work.svg": "fc36451b866a783169423f6331a216de",
"assets/assets/images/bg.svg": "642d5a75df03464f656de5f87aed7721",
"assets/assets/images/profile-image.jpg": "0ae81ea76ec27276be47dadfa988a0f8",
"assets/assets/images/profile.jpg": "1094b687f4e8093e3ca1fe2d45b2c03a",
"assets/assets/images/pu-logo.png": "f976ce9ff0be938b6bab2ca5c6ad1522",
"assets/assets/images/sschool.png": "33f047b867f1bb3263262aff01dd48c6",
"assets/assets/images/Ssst_logo.jpg": "8760560011cc13d4a073dcaa11b2c115",
"assets/assets/projects/credit-card.svg": "7ceeae08959a87827bcb0e468181e399",
"assets/assets/projects/flutter.svg": "fb9e82f4de3bbd9bbf23f8af17199313",
"assets/assets/projects/powerbi.svg": "03a9001c459168cb2ad8976c0660cdd0",
"assets/assets/projects/shopping-cart.svg": "e1f141bf73c35d6fd9fee2e096bd5c9c",
"assets/assets/projects/tensorflow.svg": "3a752798df8defd0e695daa32662d95b",
"assets/FontManifest.json": "4b20622457f1375957b0002209d179cc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e4a5bbc0caa3cd49ae30fd539faee60f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1bd2d9feffe837dd7686dd1c0d26fe04",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "18a3e55c074f83a2b49a743901251821",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5cc40a47d48e8f4895d96dd44e5233df",
"/": "5cc40a47d48e8f4895d96dd44e5233df",
"main.dart.js": "fc5bffa1f68a85b6e3b33ba3943c93fe",
"manifest.json": "5267228acc7c3e35cb7d13c95d908138",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
