const withCSS = require("@zeit/next-css");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

module.exports = withCSS({
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    if (isServer) {
      config.module.rules.find(({ test }) => test.test("style.css")).use.push({
        loader: "css-purify-webpack-loader",
        options: {
          includes: ["./pages/*.js", "./components/*.js"]
        }
      });
    }

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: [".next/static/*", ".next/static/commons/*"],
      modifyUrlPrefix: {
        ".next": "/_next"
      },
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "networkFirst",
          options: {
            cacheName: "html-cache"
          }
        },
        {
          urlPattern: /[^3]\/movie\//,
          handler: "networkFirst",
          options: {
            cacheName: "html-cache"
          }
        },
        {
          urlPattern: new RegExp("^https://api.themoviedb.org/3/movie"),
          handler: "staleWhileRevalidate",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [200]
            }
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: "cacheFirst",
          options: {
            cacheName: "image-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    };

    if (isServer) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        })
      );
    }

    return config;
  }
});
