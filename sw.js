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
    "url": "webpack-runtime-e45c9b5f3c06769f5ec7.js"
  },
  {
    "url": "styles.c7fbe20406ce22d64593.css"
  },
  {
    "url": "styles-36bfa24fe9d05cbb27d7.js"
  },
  {
    "url": "app-35ddbd1367c32dd60808.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-893df9c266b0bd204345.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e81addf2917f4b040fb1260a49d4d3b8"
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
    "url": "1-1ae6d1b6747b77a9a078.js"
  },
  {
    "url": "component---src-pages-404-js-50451765fc57247f67ac.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})