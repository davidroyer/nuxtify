export default {
  index: {
    label: 'Home',
    to: '/',
    seo: {
      // This should be from nuxt.config.js
    }
  },
  about: {
    label: 'About Us new',
    to: '/about',
    seo: {
      meta: [
        {
          name: ['description', 'og:description'],
          content:
            'Learn more about the people behind Developmint and get to know us before we get to know you!'
        },
        {
          name: ['title', 'og:title'],
          content: 'About us1 - Site Meta Right-Side'
        }
      ]
    }
  },
  contact: {
    label: 'Contact',
    to: '/contact',
    seo: {
      meta: [
        {
          name: ['description', 'og:description'],
          content: 'Contact Page meta description'
        },
        {
          name: ['title', 'og:title'],
          content: 'Contact Page1 - Site Meta Right-Side'
        }
      ]
    }
  }
}
