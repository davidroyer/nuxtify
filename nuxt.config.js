import path from 'path'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import siteMeta from './config/meta'
import siteConfig from './config/site'
import { generateRoutes } from './services/blog/generate'

export default {
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
      const blogPosts = require('./data/postsObject/index.json')
      return generateRoutes(blogPosts)
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    /**
     * If title is not set for page or blank then we don't need the hyphen
     */
    titleTemplate: title => {
      return title ? `${title} - Site Title` : `Site Title`
    },
    meta: siteMeta,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#222'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  plugins: ['@/plugins/vuetify', '@/plugins/create-seo'],

  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],

  // '@nuxtjs/google-analytics'
  // 'google-analytics': {
  //   id: '123-your-id'
  // },

  /**
   * Config for nuxt-webfontloader
   * @link https://github.com/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons'] // Loads Lato font with weights 400 and 700
    }
  },

  /*
   ** Build configuration
   */
  build: {
    // extractCSS: true,
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
