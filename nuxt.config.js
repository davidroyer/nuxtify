/* eslint-disable no-console */
import siteMeta from './config/meta'
import siteConfig from './config/site'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// const pkg = require('./package')

/**
 * Analytics ID will be set here so it's not exposed in store
 */

module.exports = {
  env: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? `${siteConfig.url}/`
        : 'http://localhost:3000/'
  },

  watch: ['~/data/*', '~/config/*'],
  /*
  ** Headers of the page
  */
  head: {
    /**
     * If title is not set for page or blank then we don't need the hyphen
     */
    titleTemplate: titleChunck => {
      return titleChunck ? `${titleChunck} - Site Title` : `Site Title`
    },

    meta: siteMeta,

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */

  css: ['~/assets/style/app.styl'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '@/plugins/create-seo'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons'] // Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
