/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b9b085a4b7def6ff53b7dc02881ef027"
  },
  {
    "url": "about.html",
    "revision": "03c205aff3fae0858377865b086aee2b"
  },
  {
    "url": "assets/css/0.styles.5fc009a9.css",
    "revision": "cd81486e6ba92a50e4501adf2d88a921"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01c6f684.js",
    "revision": "fdd75f22342903153965c2314fc348b5"
  },
  {
    "url": "assets/js/11.0d2da6c5.js",
    "revision": "f6a1cc7f7677bc46eafe298f5e771aca"
  },
  {
    "url": "assets/js/12.a893a0f2.js",
    "revision": "1ccece578e159698439614418d4f2259"
  },
  {
    "url": "assets/js/13.659c4935.js",
    "revision": "96448a2618c5ad62320d20af7109aa25"
  },
  {
    "url": "assets/js/14.b8c0756a.js",
    "revision": "3b9e6c05fe80d91c8cff1e986dbcf4ec"
  },
  {
    "url": "assets/js/15.7a53e79c.js",
    "revision": "4bb1d93af9d3e5bf4dd5f1e01741aed5"
  },
  {
    "url": "assets/js/16.cc8bfe0a.js",
    "revision": "20d39e148c9766fa79f38f46891fe299"
  },
  {
    "url": "assets/js/17.1a1dfa0f.js",
    "revision": "2ca227afab8bb48b513a69a919317609"
  },
  {
    "url": "assets/js/18.d1c10a47.js",
    "revision": "e7da8a8b844da02112b9571065f9236e"
  },
  {
    "url": "assets/js/19.1f1f4435.js",
    "revision": "2d7e2c595413c81835ee2199e2dc3692"
  },
  {
    "url": "assets/js/2.c784421b.js",
    "revision": "751c5e1dc701b6bb6f6fb22306f754c6"
  },
  {
    "url": "assets/js/20.588b4ada.js",
    "revision": "c16c9d5703fb496e3366c0a5bb470658"
  },
  {
    "url": "assets/js/21.025b66f8.js",
    "revision": "6438225116ddd0815addc1234e71bfcb"
  },
  {
    "url": "assets/js/22.51254087.js",
    "revision": "045554e30fda107603a84fa90786e7f4"
  },
  {
    "url": "assets/js/23.74f671e3.js",
    "revision": "fd5b22e71de8869f266dd468add5154e"
  },
  {
    "url": "assets/js/24.fd96ab41.js",
    "revision": "08afbd2d3d52e3c785c7692933c16c6a"
  },
  {
    "url": "assets/js/25.0ddf221a.js",
    "revision": "b6bd289a99fd7aa31bbf012b8c0acd90"
  },
  {
    "url": "assets/js/26.9bc0a295.js",
    "revision": "b5288edfade3dda6f04074b6a7f55f36"
  },
  {
    "url": "assets/js/27.e6181e7e.js",
    "revision": "4d67efab4a04e38f43511ebab00f02ff"
  },
  {
    "url": "assets/js/28.be6f57c0.js",
    "revision": "873bd204282172da915b52f1404c9f53"
  },
  {
    "url": "assets/js/29.41969225.js",
    "revision": "08e1fbe5ac16342b8700b907f74bea4b"
  },
  {
    "url": "assets/js/3.60841b8a.js",
    "revision": "1b5049937faab66a59abb362a297d827"
  },
  {
    "url": "assets/js/4.3a9a364f.js",
    "revision": "28c2b75fea660628269930e6bf783968"
  },
  {
    "url": "assets/js/5.133307b0.js",
    "revision": "eea6c164a268e443928acec056a78397"
  },
  {
    "url": "assets/js/6.0194d88a.js",
    "revision": "09ab631ff2f11bce3b9ba1252ca2db3e"
  },
  {
    "url": "assets/js/7.50a0ed3b.js",
    "revision": "6c9e90948760677250d6d34e17930e18"
  },
  {
    "url": "assets/js/8.c6a3510a.js",
    "revision": "b9ec271afbf0bf92918372f88db08a44"
  },
  {
    "url": "assets/js/9.0aea7bba.js",
    "revision": "14e90d0a2af1efc2c8dd44561a9c4258"
  },
  {
    "url": "assets/js/app.ae228d5f.js",
    "revision": "f364e20018362a67c325d54a5c493f85"
  },
  {
    "url": "demo.html",
    "revision": "31b1a54d2c6230604ff91ef880e690cc"
  },
  {
    "url": "en/about.html",
    "revision": "8b312ab785e4fb30fe64d14ed0007235"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "597e7f5d4b29d722034ffe2233a48beb"
  },
  {
    "url": "en/guide/config.html",
    "revision": "d526861e917f96276bfd2cab4e96eb3f"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "cffa09cd23c37c92a05ac39a422145eb"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "202d458b96a3238fdc5728a18ed536c6"
  },
  {
    "url": "en/guide/index.html",
    "revision": "610f8b807034492b92aa33cc37ffb17d"
  },
  {
    "url": "en/guide/page.html",
    "revision": "a90a3167a36a27891375e3915367d147"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "fb071dec6e78afbf7007c3390876de91"
  },
  {
    "url": "en/index.html",
    "revision": "4002c1879ff9606387734b2eb6aa09b9"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "98428e39e15c3afb88c985849343d515"
  },
  {
    "url": "guide/config.html",
    "revision": "ecb602fdece9b887dc227cb47adaa432"
  },
  {
    "url": "guide/faq.html",
    "revision": "d6d7fd5dd83e8078682c068079384f46"
  },
  {
    "url": "guide/icon.html",
    "revision": "54cbb3aa601eb214ac8f7efae000fe7a"
  },
  {
    "url": "guide/index.html",
    "revision": "eb426c50443c8813b3544de1e17c7f20"
  },
  {
    "url": "guide/migrate.html",
    "revision": "ac9c99767cb5dc0766c45a15e83e3128"
  },
  {
    "url": "guide/page.html",
    "revision": "139e58e5c48357a0aea1491de397b1c6"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "fc4efce7d20fc2cec466748034c20fa5"
  },
  {
    "url": "index.html",
    "revision": "db00d4b9e43de10b1cc504f9f2bb4cda"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
