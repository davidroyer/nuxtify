/* eslint-disable no-console */
import path from 'path'
import siteMeta from './config/meta'
import siteConfig from './config/site'
import { generateRoutes } from './services/blog/generate'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

/**
 * Analytics ID will be set here so it's not exposed in store
 */

module.exports = {
  watch: ['~/config/*'],

  env: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? `${siteConfig.url}/`
        : 'http://localhost:3000/'
  },

  generate: {
    fallback: true,
    routes: function() {
      const blogPosts = require('./data/blog/index.json')
      const routes = generateRoutes(blogPosts)
      return routes
    }
  },

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

  plugins: ['@/plugins/vuetify', '@/plugins/create-seo'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * Config for nuxt-webfontloader
   * @link https://github.com/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons'] // Loads Lato font with weights 400 and 700
    }
  },

  /**
   * Analytics ID will be set here so it's not exposed in store
   */

  /*
  ** Build configuration
  */
  build: {
    // analyze: {
    //   analyzerMode: 'static'
    // },
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
      // const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/');
      // config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      })
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
