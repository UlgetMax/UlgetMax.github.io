'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "54edbc2a46a393a8139896d555b85628",
".git/config": "ec142f251c17221f403e994838dfa1f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc1b313eab80b4e6aeec870c41b9e1b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83fa4603143a0a579e09305bd3e7e2da",
".git/logs/refs/heads/main": "6be995c2f48ee001f24f1d53e567391f",
".git/logs/refs/remotes/origin/main": "8fc5c34940e014a523d1647abac60a22",
".git/objects/06/6749c396f4f630755f59f5f513e4812aa57820": "27d129ddddf948bfdf0cab693ed284f8",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/1d/e6ad35013c4c3a2ac9675e70637a07f0620ed1": "4ec402cc95d3eaaa76d3b747cb2c86e2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/6747ea2fae5ad209836eb763b5f99e629f4492": "f0c269269768c636aaa629ef8426befb",
".git/objects/25/0bc6eb11c1419b90f8dbec2b53c1e6f9c223b3": "63fbaf4c940eacce340a791122bb8551",
".git/objects/26/2acb8069ae679b4d1fa9a86451407fe151d3a6": "353462a888ffdd56743d58db0395aee2",
".git/objects/28/25c9fd3992e879eb732135b54bc9beb22af4c6": "83f22c80b881856cc047f88220bcc1c6",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/5080a2356c6d656e734548c1d23420b85ac4a6": "d6665c326c3dea96035f9821c870cd1e",
".git/objects/32/8930a07a12891cf5e03ed15ceb48f89231bed2": "b06bc1480799f3a25ec8e76942ad6297",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/42/eceaccf665f8121c1ef90ab271db4e3c37f7b1": "b24c6a94eff6e0ce69948306edb4f412",
".git/objects/49/50ba748814fa0a37d732abdc62978f4004e225": "ce09f9db81bc94ed715b2e1cd28bf797",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/52/2dc3105c81c753c96ba7b0b0024c42301dee6f": "a9fa8f430f523f3f98fd2f2aced148cb",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/979039ab28aaae305074541fe39258753ba624": "d8d203e90bc2970b708c118fe10ca044",
".git/objects/5b/a845caa3d093ca4dadcab2bde19333df9b4e82": "4029ceac03153bc340fa36aba92f9ab3",
".git/objects/5d/50947c5a9c789cfc47379e06c3848ca6fb1163": "60630f4838584295361e357c360e7887",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/bc53dc0c52f71d0e02236aa74cbcc358344467": "d1b5cf927d954c0696689cc4318756c6",
".git/objects/73/7180859ccb77f7aaa956b36c7045479c58421a": "24b3c4b68f87749dc1d7a170d97ab65c",
".git/objects/7d/1b450333829a8eab63f2709fb94342f3b54e33": "c0f8ed521031ce07cb16c4d7fbb14d94",
".git/objects/81/1bf1193282265301760df20341c5b24ab9b666": "8ffd076e5af87b5437be4c661c833e32",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4f3bcb68cb27abc0dce4d5c2a37fc312ca2ea0": "d6d959020885f536031e7096d35fbfbd",
".git/objects/8e/b5fbdf538cf67ddb94e5ff6ae5280bfc345a27": "55c0948ade3ee65b71245634ce471ff3",
".git/objects/91/f9af7e50be400fc6790922e0d4412ec1f201aa": "2a728d0f3465464bca2456fca293359e",
".git/objects/94/8a2a6cc76a4d7cb692d0d08e352f126ec48a9d": "cbf73b51fb0502e860178e210c363ca7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/9d/8567706703887b181d787e294de19c2cfd579d": "b3a67337d1e57fde4ec0312b607cb26c",
".git/objects/a3/c58c506000026537160a0076e7d09cdce043ec": "b0555bd09897b23b75323df8828b58ce",
".git/objects/a5/c2660a6c6ee2853237cc30adf4a03f9bcf3341": "4b75f567c5be2f1c8ba19f5fddd2644c",
".git/objects/ab/e99e20c38a23e95295917d6a5cdb49a8489eb8": "daa46bdb83328438b3e1f0bb1b074657",
".git/objects/b1/d52203f5498e9cf49884a4d48eff6cedcb6730": "287a93314cf0d38c858a678b96d3e31a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f313047c937e8ad028687ada2bfd3839016e92": "d11fab2f761f26ff73d24000bbeddc5d",
".git/objects/bc/b753437f71eac863a37edb7c21f64c2d4f85b1": "6a5362f210e0ecd1f676c4b02dcf9041",
".git/objects/c4/6e457d70255fdb02c30711b69bc167448923f0": "446160df16266145e9a206582a1f41f1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/2d185c1a8103ac6565558eb860f612fb47055f": "525057ca879935c41ebe9956a1619899",
".git/objects/cd/6978e1625b6708b80ccca16eb961321ae4f5f5": "7b31c9133789dc6ed932e70ee5e08c35",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "339275ef60385a218d05801d845443c2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/3dc5f94f87a0e7b3501eff1f95da6c82a1515f": "7a870c68e967498debf65d74bab59e7f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/f9f4e7cb6c1f4ca55b4332ba5b760a7e23bbdc": "42bfbdbc0b662e1d9a3fc8cc1a919995",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e8/86616f9af2c6a3dfc7131c02c2cf32be750254": "0b8583cf805e430799a70c2f0dda70a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e77cc3003936552df7c4ed0a8f823f04662154": "322c3269741456d676adb76bf2c78ec8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/24a5a5cf69727af1ced00f9be161302bd50b26": "4c37b4a1bad3dd359c5d01e2d85ac145",
".git/objects/f4/49f14e7dad6fb684417f7bfe80708a5e9b1cc7": "076e06a13e0cc54bf4be9410f5b23505",
".git/objects/fc/0b76f1bb0d09e9ed5e5256a0f291961815448c": "61f9ef5abb69cec94defe4038a7512d4",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "ff0a3075f7004f04a9058eb6f24ebb9e",
".git/refs/remotes/origin/main": "ff0a3075f7004f04a9058eb6f24ebb9e",
"assets/AssetManifest.bin": "2ca66379352adaf664de1631fda47ca0",
"assets/AssetManifest.bin.json": "c349cda854fef64eb694503e93778c01",
"assets/AssetManifest.json": "2415692ff69e146654d7430cc237a63b",
"assets/assets/address.png": "7e7613cb5d1581670c196ffe1c458eef",
"assets/assets/design.png": "4b02f1bdd88a84c36229fbc952d7d8d5",
"assets/assets/developer.png": "61dbb42e56ecfd48124dbfdbe55a2242",
"assets/assets/email.png": "1713983141dd09fef91546d00c928d09",
"assets/assets/Icons.psd": "0dc5a03a40fed185c8e20316e485d7bf",
"assets/assets/img1.png": "d700eb2ed56badec8e7ce80d79c1293c",
"assets/assets/img_bus.png": "fc3fef615215d3b7ac85ef5d9815cf46",
"assets/assets/maksim.jpg": "179347a24a1d43a67bb0034f7a0c939e",
"assets/assets/maksim2.jpg": "28775279a356e8e786de4379aa5fe329",
"assets/assets/Morder.png": "00b731588ad22d3b16ec16c4d6f569a2",
"assets/assets/phone.png": "be7e02766a59f6c7e308c89d83156c28",
"assets/assets/promote.png": "c5b3d85564fb8dec1082da90e67cb9f1",
"assets/assets/Resyme.pdf": "deb3176fff51351d5dbd0cb5725ce9ff",
"assets/assets/telegram.png": "41fa56d0a8fa08163c86315bf5991bef",
"assets/assets/write.png": "e4b0eb66659de74d20a73f7983285534",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/fonts/MaterialIcons-Regular.otf": "ac86ba16c85c8f46e9e80199724734be",
"assets/NOTICES": "c5b52cafd45e7c5a055f2a36b279284a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "bd9eef1732fc1a546397abd86b939edb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "922bc708939be80a0559ee1d71f69056",
"/": "922bc708939be80a0559ee1d71f69056",
"main.dart.js": "94b7b1d79b651d3d68641be327490e0f",
"manifest.json": "c37fc42aeafa55481b0f1cd14b65a4be",
"version.json": "9d4b34e01deaa0aa4b84b707cc72df0d"};
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
