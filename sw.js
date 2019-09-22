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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d7d78452b0229ca3e4cf.js"
  },
  {
    "url": "styles.768c8f02ad8b3cea413f.css"
  },
  {
    "url": "styles-5a316ed1af4002716b9d.js"
  },
  {
    "url": "commons-eb30dc2fecea488d776f.js"
  },
  {
    "url": "app-5c78c84e6bc4336bbd6e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-661a47caf332a6675bb1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1752d4ec1efccfb3f3e54f812ec0e2f7"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTUQjIg1_i6t8kCHKm45_QpRxy7m.woff2",
    "revision": "8f4eb059474d6e182661a400c14c0354"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_ZpC3gfD_g.woff2",
    "revision": "efcc6374aebc03779d15c7a0576ead21"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_aZA3gfD_g.woff2",
    "revision": "2498e2b320c4f7bc30cd38a358663ff9"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_bZF3gfD_g.woff2",
    "revision": "c6468b00b3049566f55eb73caa444da5"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_c5H3gfD_g.woff2",
    "revision": "2b2c1f44a30dc52d6b81e6e23038807b"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gfD_g.woff2",
    "revision": "9f3310c3dedeae46f2d45aaeda8ca735"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gfD_g.woff2",
    "revision": "49afe0944b1ded43f13f9b232c0627a0"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gfD_g.woff2",
    "revision": "4fe50133e6ef01a192ec4ca8e67eff20"
  },
  {
    "url": "google-fonts/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459Wdhyw.woff2",
    "revision": "20f97c00e6ed7cf6dd254348adafbc03"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRxy7m.woff2",
    "revision": "8f4eb059474d6e182661a400c14c0354"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gfD_g.woff2",
    "revision": "efcc6374aebc03779d15c7a0576ead21"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gfD_g.woff2",
    "revision": "2498e2b320c4f7bc30cd38a358663ff9"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gfD_g.woff2",
    "revision": "c6468b00b3049566f55eb73caa444da5"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3gfD_g.woff2",
    "revision": "2b2c1f44a30dc52d6b81e6e23038807b"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gfD_g.woff2",
    "revision": "9f3310c3dedeae46f2d45aaeda8ca735"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gfD_g.woff2",
    "revision": "49afe0944b1ded43f13f9b232c0627a0"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gfD_g.woff2",
    "revision": "4fe50133e6ef01a192ec4ca8e67eff20"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wdhyw.woff2",
    "revision": "20f97c00e6ed7cf6dd254348adafbc03"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v14/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgA.woff2",
    "revision": "5c47ce70ac7ebb37a1a14efd0a3dc6eb"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v14/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5g.woff2",
    "revision": "21868b233f038a9afb4d5b468b813587"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v14/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lWAe5g.woff2",
    "revision": "cc1fafe302dbf5ac8c8aceeef631ec1c"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v15/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgA.woff2",
    "revision": "5c47ce70ac7ebb37a1a14efd0a3dc6eb"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v15/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5g.woff2",
    "revision": "21868b233f038a9afb4d5b468b813587"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v15/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lWAe5g.woff2",
    "revision": "cc1fafe302dbf5ac8c8aceeef631ec1c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "31f17f5dcefb84361ccac24a2c805474"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-5c78c84e6bc4336bbd6e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
