/* eslint-disable no-console */
// import * as api from '@/services/api'

export default (context, inject) => {
  let slug
  let article

  if (context.params.slug) {
    slug = context.params.slug
    article = require(`@/json/posts`)[slug]

    article.test = 'Test Here'
  } else {
    slug = null
    article = null
  }
  inject('slug', slug)
  inject('article', article)

  inject('getPost', slug => {
    console.log('IN getArticle')
    return require(`@/json/posts`)[slug]
  })

  inject('getPosts', () => {
    console.log('IN getArticle')
    return require(`@/json/posts`)
  })

  // Vue.prototype.$slug = context.route.params.slug
  //   ? context.route.params.slug
  //   : null
}

// Vue.prototype.$api = api

/**
 * THIS BELOW WORKS
 */
// Vue.prototype.$getPost = function() {
//   const slug = this.$route.params.slug
//   return require(`@/json/posts`)[slug]
// }

// Vue.prototype.$getPosts = function() {
//   return require(`@/json/posts`)
// }
