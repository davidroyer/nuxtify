import siteConfig from './site.js'

export default [
  {
    charset: 'utf-8'
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
  {
    'http-equiv': 'x-ua-compatible',
    content: 'ie=edge'
  },
  {
    hid: 'description',
    name: 'description',
    content: siteConfig.description
  },
  {
    hid: 'robots',
    name: 'robots',
    content: siteConfig.index === false ? 'noindex,nofollow' : 'index,follow'
  },
  {
    property: 'og:type',
    content: 'website'
  },
  {
    property: 'og:site_name',
    content: siteConfig.title
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: siteConfig.title
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content:
      process.env.NODE_ENV === 'production'
        ? `${siteConfig.url}/${siteConfig.ogImage}`
        : `http://localhost:3000/${siteConfig.ogImage}`
  },

  {
    hid: 'og:description',
    property: 'og:description',
    content: siteConfig.description
  }
]
