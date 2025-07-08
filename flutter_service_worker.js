'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3159dae9239e52f5b974fc251038c17e",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "bdc54194595758bf613940a6957a9d36",
"/": "bdc54194595758bf613940a6957a9d36",
"main.dart.js": "f029116378c2dcbabe55bd7455d67358",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "2056b7ce71b133d50247a9eda822920d",
".git/config": "ec7e3e224689ac6870ee07a93c0b3167",
".git/objects/92/f3d0afd2d210a04f1583d7750cf0db16354735": "020da1a32c4f54b51b4be9a28e33f269",
".git/objects/50/368988329563b4d2e11d603817b0cf2b76464c": "f602180c9de9ba6e1483871befc65735",
".git/objects/6f/2cbda6bb3b37af3d668eb592f714d405162b34": "57d28824c4d9b75b82cd5f77a57209b6",
".git/objects/0e/e1f967c510d7b1724be60a5ce5db525da576ec": "3e683c6b0a8e8c296bdac168da1b6275",
".git/objects/9c/cd78c8108c1d91fc628ca060903c9519c2f37e": "262e45a3a421cd7fe73b8ff6d08c8547",
".git/objects/ac/0cb3dd366f5369f3164fb167fd3dbb3bf2a9b0": "69bb050d167dd51938dbb22edfdfcdce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/74e8c04bae8b2b89c8f55d356647b83c95cada": "8944f84eb8c9c82ee4ad7fa5fb501c2f",
".git/objects/ab/48a65e6f4b15eee6284feb3648919033e8d19a": "e5d9b5bcf37e31e944be056cb1370fe5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b58953f6f639502aa3d090f1da70b5302de3ad": "b30b0b31965d6b34d15af7140fbb5a82",
".git/objects/fd/bf3949f71214aea36a2f88e568cc4177ed80d9": "0dcf1ddf418f93199dac0b3045eeaaa6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a59641c79691c45553434f9f14f35b82481591": "09b22da321d10c67e1415b11dc16bddb",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3eba7406a7b37c8c85f8e9afcd33728bc1256b": "da9666575b1dc55c83e5f0c50e9d4bd4",
".git/objects/44/f15e28c2fd006d706686f0c5aed8dd7bda4209": "bee9f6fad300c356fb63aab4e25f53d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3601d5e4855b5cedea85aefe4d2e3d57cac8ed": "72052d51b09d66871c0acde2abc28a2a",
".git/objects/9f/ab665baec96fb0bd5512730ee127ad743656f3": "c5df2d8a00792740a0d3f0fa0da0eed4",
".git/objects/9a/ba4600d44bb3451cbb3c1089057f511eb65b83": "31abf642416ffe2eb8566fe240c0e041",
".git/objects/09/bfec7a6fab277231eccfd8851022b3d4c99d1b": "be48acede15c13b295510fdac8fadb00",
".git/objects/98/5aa19a1bd2278d18798df9354bd9491e9d585b": "aee02408eed18e63658c40328f57913a",
".git/objects/5e/84141300be09408abc77e1db9071d2c71fd74a": "f9717f43ec6cecf4b5157a5eac20fd8a",
".git/objects/08/b7997b1d209566d813fae6951dffa98c5de3d6": "8d972729e61185e8469d66647c769370",
".git/objects/08/79e9f4c25e8b502e79c79ba666e0b6eb3a0ec8": "d4d37ac5edb14880ba88dfdf254d3666",
".git/objects/08/9bffa30cfd12419c6d1c19d0f8c93eeba74bc0": "7ce937568332533bc200a7ff63edda99",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/bf/e5f0b26af82629bd57df7ce0d181fa79e7d0f9": "4b5ccb2125b8b86671eed33af9560c5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f9/4f498579d98f20fe7adbfe76efe5f41edbbaf0": "7ecddc004385a6c73128fdfd336c3b34",
".git/objects/ff/c94289b9ef6453e491b3590790916d255e1505": "27ae6319fb216e65d9f8cb0f010ea81d",
".git/objects/c2/3c850b719ad5f846c97af623c03ace7ce0b283": "c9727b2349496336e69d582692063a1a",
".git/objects/e9/8f476559763e0854d8b45cfcadbb352b49bcbb": "f082d8a4533ecca3d6a77abe4076b2d6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/61a5443f9a229f83c26b5dd7426c0c06ea6978": "0cdd2cbc97cc705d3f89c59e4c9bc114",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/a3eea7f27b7b74b96ff4510f4a1ab2b7f7e5c9": "c217cd9ae91722dc9a707961b228b5be",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/7a/cf8c74d19760dab52b6391d2308574cf3edb7f": "fb4372af404055d34bb3d084e329658a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69afaf438016377ca70f9e97a46940b7",
".git/logs/refs/heads/main": "90e7dd781b701cdb92fa6e2de3ae14e6",
".git/logs/refs/remotes/origin/HEAD": "0f1415f7659b5dca97a6486438e11494",
".git/logs/refs/remotes/origin/main": "d4cbee1acecd7368af1dbb070798d413",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "470ce3c2f8994bdd957b81d16845b68c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "470ce3c2f8994bdd957b81d16845b68c",
".git/index": "302215970330c8c0e56fd8ad94c50fc4",
".git/COMMIT_EDITMSG": "f841e11af0bcc2f0d8dbe99e5a4325b7",
".git/FETCH_HEAD": "00cdb884f954e66f331daf2be77cbcd3",
"assets/AssetManifest.json": "13a4bd9a592ebc76429ff4c28d35f87a",
"assets/NOTICES": "1e0b4fd4e9fedce20dc434eac6efa4d4",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/AssetManifest.bin.json": "3affced9b91f117d3be166a8de0b2ac9",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "10e6e8ed1e92a1d2a41cdeee44cb5728",
"assets/fonts/MaterialIcons-Regular.otf": "0ef003a9f036e6d99e06ba497c2186ca",
"assets/assets/images/profile.jpg": "308e1cf6569bc7dd4650cf2744f0d7b0",
"assets/assets/images/about.jpg": "a6451f515b627e5983011c9db5495c3a",
"assets/assets/resume.pdf": "08186dbfb742c03a82c4fa7ef55e483e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
