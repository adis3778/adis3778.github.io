'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "26e39f2081dce5125e953a6afe8f95e1",
"main.dart.js": "1d6f54323e0be49e2e049badb3e37bd8",
"assets/AssetManifest.json": "08788c18df458d7d64d37c8fe4e54ca3",
"assets/NOTICES": "4ac41a50eadcdd2e68f4de9c19a5621e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.bin": "c1e7378e0adc720b668df2d58e69c481",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/twitter.png": "a12f1814f16d2dabe99a9ef7c1481955",
"assets/assets/tshirts.jpg": "cde96863997235bef05dcc2d14785de6",
"assets/assets/xfits.png": "9998117bc386f38ff9d6361d7aaa0383",
"assets/assets/clothing.jpg": "8b77f9039c842b1c39d76aae2e144b64",
"assets/assets/wave.png": "38efc697b459847c0c7e8331d6df188b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "50e5d95e42575e6a23b1b9536c086f4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "3871b4857c5e496bb69d762f029103f2",
".git/config": "8720d56c3f328cf2ef4aa747475f767d",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "230d80fcb7bb88265eaf5b12bfa497d1",
".git/refs/heads/main": "230d80fcb7bb88265eaf5b12bfa497d1",
".git/logs/HEAD": "42f6bb514bfe0f5f6015d6b1b70d4a56",
".git/logs/refs/remotes/origin/main": "384ef27680b1c65d8671d683771eb4aa",
".git/logs/refs/heads/main": "906959d65b67500bc43b734068623c1b",
".git/objects/97/cb6cdcd41d0b7baf7548b42f7d7af1fc3c6f23": "56083d92a3ac6497e752a034819ca8a2",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/ba0565adaf1af926beaa9c082100886276edc0": "f3ce560f36275070887ec2311a89c64d",
".git/objects/d0/3cebb995fb84a14c9a609498cb9fa0491e9b87": "9f4f47e99e970ba1bc21fb5e60ad22f4",
".git/objects/f9/4732d9bda77f3327648ecbe330a9cec6ee31c0": "44777989e4736ee561320357d213789d",
".git/objects/2a/d8dac59646f059965400a64c7fbb652c5f09c6": "2d69b00f210ff5773f4bf35443af6602",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/66162771f32bcd1a370451ca9372cbc0ce2b8a": "2d501f9fba048aa52def0adfafac7056",
".git/objects/ac/01f5fba150d888d5dcfc57c8a430001023b45c": "55cc891af4697d702a2fd7b1f0203cc2",
".git/objects/e9/4dc77e698325af78c1a20ff41675f72160187f": "cf433c870ff6f0c6ac31e710bf3d9ad1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/c7/22db904b918c1b268b3bd7f415cc7edd4c89af": "e5dfeb7bd138346a9e058f6e2004051d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/f7/2adf4b4d6b4d5e25ae7c4e5e4d5a9ef8aef4f3": "689b9a3e3de4c88332a56a43cb28dbbc",
".git/objects/65/53447fd4f3a9cb2a496d6e8512376a3bdd15e9": "99ce18f7af31737f2ec542d362bc35ff",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/db/4e51651fba7c13bc79ead6cc35d8bc641b7680": "25032182c5d6788eb3de3833532a4cbc",
".git/objects/85/b9bbc8c88681a7a21d3d413b640546b5d01bdf": "da1f04fd6774eae5cc8f1f9e26d7a47f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/67/c8d01bf43eb6fa2435ccc2a9ce6635a98901fc": "f0f5a5c1d957f32b95efbd00892ef382",
".git/objects/67/419d0e6c8b44a8ca3d58fcbeb491fc663133f7": "cd0007a6138edc161b3409c780b09b95",
".git/objects/de/b3b89cafff9f0c4746371d3102e4dbfed60fb5": "63361d6bed1c30132b12978d2f283425",
".git/objects/b1/09d8dcd72c83dae5802dd41157d1cdb63e5e6b": "ce8afea34491169a3dde47269ce2b52f",
".git/objects/6f/d2e07563c4e68998c15383f0220b0fc8171d1a": "c08dc6e21787b6584372bd0532a36f47",
".git/objects/64/6e9670d7103fd43b6df6224d1a299a19864e18": "e2a5593d0a4abd06638a63c665bb00a6",
".git/objects/64/94d52e3e4b15b41a8bbce81d626aec9b5e836f": "14011e7694ec3d8f493e73ae38d63220",
".git/objects/7c/b493195ea98aafcbc36dbcacd277541f3f9b2b": "3cbccace3822966b4893c4f70a6c82b3",
".git/objects/6e/4e30f30031ce398e682505b23e0fdcb13db5a6": "67d3a5c3b156858a6806368604608119",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/89/cf5f5a28be6ec7fd0b36bba3315e524bab017d": "f759040d6caa6faccedf8028ce8ba3dd",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/f72d262dbf2f68e66765fdcecb063813dc7a91": "9c2aaa654b41bbc8be2b6f48520c9084",
".git/objects/45/11c75ff265cefe8fb0ec127180937feb148dcd": "29141b5c3861e044474af747db5758af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ddfc193dc6130768202b40c8015f59808cc91b": "597fbf720a612db1ccc6addb829c29b6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/75058e1894945c9d65d345bf1ef3d45ed88d51": "1b504bba0f25f8c89e739dde362db8ba",
".git/objects/eb/0c1c07bf79bdc0c66c9f30b02d5b778164afb3": "aac32ad51b8b7781a715a5170351e9d5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/43c0d1639eef4bc640ce0296897f7f25526691": "dc287856affd7d7d6f1dfd3be0e53351",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/2b/df9d0c505d0653c1d6ee35a74e8f7b01b2c7da": "ba336ce874169e400013f22bcf655ecd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/41/fbebee437de3f781a92aed038ec400b5152365": "3c6b1b1b254cc9476a98fb1da60ac0d7",
".git/objects/6d/eb7802a90eca93605f7fa78a6f6b5193946865": "9a078fce9f64ccfd1218c182d3f92673",
".git/objects/7e/089243638bcecd01056b7466d6f4117991c820": "53b865b539b44278f47e9d5e9c71d19d",
".git/objects/5a/db9932edcce369e5c1d56ff7bd6bbbaa24f74c": "8a90ff18704c1da25f48ba3c20df9bf2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/52/502e0a699ca137c6d62a698d50b36c2a5b4ff3": "abb510c4a0491fcc3e39ff2d985a6b5f",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/d7/d12241242763b8c8837dcabc508464d9c9591e": "8e60dee3dc86d11cf2bc6e38c4e59d61",
".git/objects/13/7525c598afd0697abe41cc1a2815c1e9ecf6e9": "c675c93a9b20279afe03cb1e0e2ba095",
".git/objects/35/ba3f732785279b63ae7eab08c67c807c072e43": "0cbee1d05dd3a1786b21e55cbe2ea9b7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/8b/1721c2bc9674f196df54d108487163379403b8": "34cbcea66d8231b4e4a81f1840c2fa96",
".git/objects/5c/2b201b56494e15258010bcc0ae11f694968927": "3ea793005abab85318ad03dd154a3fc1",
".git/objects/da/824b5527aa9983b04ea0ab91399d55535fc573": "0765822137e7f50724e9794c568233c4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/43/ae7dcd4a64c8533f7e7301c3add28e5bd00c10": "ce244b3548919db91d1926bf19766c2e",
".git/objects/80/aef13508d4c2a28ec726e3e0543e77253630d5": "0bc96c23b0c908045c76b22cd7082839",
".git/objects/98/4cb68aca094b9c990f5950a816c2e773a9b93b": "1dce0f239b35eb9d8589e08085406196",
".git/objects/44/0603eb55ce58a28da0295c6d354c41721f9e62": "5cf0465535b8efe4d9b17c4c06369c82",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/81/9d80b7f4feb8f40ea4f0b464532a3d35bc9949": "74c4e79818fbd26fddabc0e56dae258e",
".git/objects/81/303e5ebd07844f9d64a4a4278c8d9098af1d3d": "180f30f057b825916e5e7025a1d59b0d",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"manifest.json": "3a5ce9e105be1aa9159f7dffed67838c",
"index.html": "7752964ea8153c1ff2bf8cc4ee802db9",
"/": "7752964ea8153c1ff2bf8cc4ee802db9"};
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
