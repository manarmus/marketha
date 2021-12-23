'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9dc5c4f823063fdb9dec0d759a2cba50",
".git/config": "8e931aa586501d8f77db18f44dfb6c54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ec31e83584f0472680c852844e0de10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2a26fbe3ca66ffb8d1337ad3b431c4d",
".git/logs/refs/heads/master": "c2a26fbe3ca66ffb8d1337ad3b431c4d",
".git/logs/refs/remotes/origin/master": "27af8eb04245a501b6cb4b13a4aba56e",
".git/objects/00/5643cf79c1e78a42b8cb2073bdaa2b0c8552a7": "7559ff36c0b6408a1bb376edcce658f3",
".git/objects/02/2c3bb43db9e4b14ea0d638cbface13c2c9b15b": "d16948e934be5f96b000150380367892",
".git/objects/05/f963e7ce97c721c9b8535139c8fda825528364": "c0fe7088b5a6bcad648cb2d65ae89c17",
".git/objects/07/cadc7ab6de6cecf36fcec9a47c52d64883a9c5": "e078ecbf6cb32748a711ca86aae57059",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/5f7117d8c2c45347a8013ef119cc80c9d212d8": "f0bed880d9ef609ac10931bd630125ac",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/29592cb442b3dbd8fdd093308e7e2f73ee69a7": "f2053f244d7d92b6acc11febced801e3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/af0db3eb97cbc23451c71ecb21a1a6d6a1764c": "c4722c760d3da495a3ca7495dc491eff",
".git/objects/17/c6ac809260268e95cf9f08d334febb3ed66481": "188ce765070921275b58281112724d86",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/444047974cc2e8f3b5d5b7aadeab6ae2fee05c": "90c8c5eef3bf61a13485f75059a1bcd8",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/ef89ade354f17ad2193d1c0663f1ea3cdb3283": "9c79ef18ce990368ceca1a95f6495694",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c4e7df5901652852d13663c6db8877c7650e2e": "4bdbfe58e230224156de926147194791",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/31/a5f247c1945b93c05c241805021f778e82d95e": "500a6449ce56993f9c231e9222b38d84",
".git/objects/31/fff9a576ab49749a1401cf015c52928ecd0238": "a8a669375b5fe7c64ad1cbecd72ef0a0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/1300dd0eeb2bf6d22153251d984d9c9e68a3ed": "4b3d1880a913bc1b5592c8ac0d5bae6a",
".git/objects/34/c796aa7bd8391e4389cd4595f08ba3bd290f67": "c4fe126e1531589af8944eedaede64a1",
".git/objects/3f/bac77146a858ce7a2686a33e4ce3d32076045b": "2d8536f9da4dc2916fcd79dacd5b87b5",
".git/objects/43/32c0d1eb5039eea632cc207fa39cf5724d15aa": "2bb7a53842a9408b706bb595f3c882c9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4c/9cb311e0e315812ce7cdd3570c07dd17efc792": "387ea90b04f4d15640a8d3ac6f88dc71",
".git/objects/51/b8c405a6b2b9672bd10786f1d6eadc2dc556ad": "8ff5fe9a2a025971aa04a46599ec1b78",
".git/objects/62/adaa723cc20eb84b850eadc55b8d64712f1a08": "8c1395924216dc854b29c66ea4ee005a",
".git/objects/62/b1b811e814c8f09ae7cfec87c46a8f67ebf449": "38798228254bae74c3c059389bfb5cd5",
".git/objects/63/3e2a8e6e2c2a3c670ab08a94eb8e66b5819b38": "3fae9b54ee10bdea469bfdf9cacd5fad",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/69/ab67a33315b4bd0393c268b573aa48a4899551": "e39bf4e27b9bec1a95d5398e7c376648",
".git/objects/6c/ecf9d1a93ca356a42ea88e7a69d819ce8e8f71": "a201b9da9f9fbb3f9e75a8313302dcde",
".git/objects/70/7d43bb2a05b50e5d4a92c3858164dd8f482d33": "4a06d3fffa9b77895347cabc01a65d7d",
".git/objects/72/c107f430796a651d3e8d03f2ae59af7ea4d08b": "6a19d0c2c77aa7e21df654f203b54538",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/ed2ef2b3abffc0feb55e876db8add238662a20": "a99b2d7f5f641b1f2cd3eace8a37af7a",
".git/objects/79/24c46dd6315e3992d1024934b10f4e83019f63": "c93d9d3e6feb622cd88460fcdbcc32a6",
".git/objects/7b/41b2225f95879911748b0d4bfd5a5021b78789": "41872ea57d6cc71bef2a3792a6fa1c5f",
".git/objects/7c/2f87ddd558589019cbf85cfa4e747edb712876": "14d95e022ac67d1a20b83b4e34754bca",
".git/objects/7e/957b2ce89b70636cdb4464a901f39cc7470f96": "d792bda271eff2903584078b4577096f",
".git/objects/7e/adc1baa7149825fab68be1b73296237b6f5d1a": "370b6e7ccb236dcc8165b365a0b48f8f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/338607f7626f083af283706848feaa292c9b73": "f4d72372a10fb76c516aabcf218988e3",
".git/objects/88/90ca76346f5909a549156a7cf9da77d8201513": "e48ac2ea6cd6f63700bb7b1f7de3b2e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fa6ff9cad5153c773296c8e7979fcb53eb3051": "cd224aae816c685b2e42164d376a7d09",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/d8ed7581868cad2878a66fb614f52c0cfe86e9": "a68f09f87307c19a17d52318834914d2",
".git/objects/97/80dd3be421325b8486a54aecb6c18a5370b524": "f308b41af7c31fb8cd5f37f5ca7e00df",
".git/objects/9d/29a1e2e64a3360ec3612660683091b7de2485d": "7614daeb40e46442adee0ede4191e2d3",
".git/objects/9e/0cc942788fffde4c82b9525598c8733ec1be16": "311d9131809247d7fef8cb4171224c71",
".git/objects/9f/5035bc36d0ffcaef8a6332d35dbb04114003fe": "785b90bde566b4ad30735394e8baa007",
".git/objects/a5/28417bf053c9dca419d424a529c6405cd6c575": "cea687c29149682bbccf02c1c388f2d7",
".git/objects/a5/ef47c8a58d29b02f90f3e458f45519fed6dca0": "91f6a9507d688ca6d134f5a114f6966c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/fc79ab58df0b593d98e7d30514083fa9e2f215": "1fe2730516658d2973e63ee7af610e3c",
".git/objects/b4/7405818979ad3ed73e603c7baa29dec83f7830": "f800cd8e132ca6861bcb78c6842fa090",
".git/objects/b5/2652e5cc9e930b682a0e063da30cbccc719767": "ae3be9a5fa16fd70f591b8c7c23601f9",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/389a11027c36f17032d9e5fb4a2ae4277e7f50": "c75bd14f72fdf7ec98fb3a3e276dbc14",
".git/objects/c2/519b3a577a8e2948a318bad7beaf25941935d1": "21253c8a03639426be6b69699f2ed4c8",
".git/objects/c7/61f65952c3a0f0b77457b82062656fcc975ac4": "cddc5f396ee695264a68d20fd99f8622",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d6/2fbde38bf11ecaf3677b2b7a9041998db2ef8f": "a6f2335260e81ffd29692333a567b0b2",
".git/objects/db/c54822980668227c5ec383d8e40352154cfec4": "bc9f65269dc276f8c4ebd54acf5435ff",
".git/objects/dc/71dbca031bddbab57b0e7bb66d0d9b3560101e": "0430c96b3f578d03947267d5d3522b72",
".git/objects/e5/7f7e9051a9f07f69b7b8fbc2601854d21d8777": "58fe58cd920fc8b7fbd8854c24bd867d",
".git/objects/e8/21417a866d6da429f576b9a7c38ed5c93e7e62": "0c050c5f766ffffa9ec70dbc26b450cb",
".git/objects/ed/d70aa10bf3edd2ae2fa9a098073cfcd8efb950": "9e9db3a8b1536bf5a8bf3a85094fbb1c",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/ef/44e025520642cf842e0d65384a31ab24369180": "e2acf2c8ebc6305469feba14099e462c",
".git/objects/f1/263f363953d56f72e0a233039e0834eb40c78b": "a1b4b516878cca61e40133d40dc385a0",
".git/objects/f1/ea46916ea7bf9fb803a6e91deaf43d5cf213c1": "aa42e83c84e170f3f92916bcc3648e54",
".git/objects/f5/9f3584d9efcc2ae28d7bd74599ba49e52cfbc4": "3a07291bcc251d61c25d5e635475c41c",
".git/objects/f9/392b441bf8aa62b0a16bd41cb3fd4884dad15d": "b605c6338f10c512a12048f3bc3ebeef",
".git/objects/f9/6535c3570a52b38d3cddaa2ce9166749305f2f": "455538cf4ec65b2fd2585258f68e4027",
".git/objects/fa/723853ed4c8c368abe6fb38d684dcfbe3b7046": "f1f5b8b536b83c89d5f2f5bf55737b3e",
".git/objects/fc/0c23f7c0d4ee8bc43b875e9151cd550e999b09": "8441e41e1f2278e88e8660e9c585f97d",
".git/refs/heads/master": "0dfe01665ae885c0793e95ad9874294a",
".git/refs/remotes/origin/master": "0dfe01665ae885c0793e95ad9874294a",
"assets/AssetManifest.json": "8bcc83dd3c94807a3c829ce1b913c03f",
"assets/assets/images/logo.png": "6a08ecb05d8756f4d60734c9ca2d4d7d",
"assets/assets/images/logop.png": "642bc476f96990d5c59856145a133662",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7a2194559ff9ec7209d17b87313820aa",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "092c31db9c7a003bd4f3bdb6771002ba",
"/": "092c31db9c7a003bd4f3bdb6771002ba",
"main.dart.js": "c8d83c4f5c6d39972384888b7cd6f27a",
"manifest.json": "7d60c94f33e6c600e4172fb691e82b07",
"version.json": "e7d15dec7a97e0efa2faabe9f67437b0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
