import * as api from '@/services/api'
import Vue from 'vue'

export default (context, inject) => {
  Vue.prototype.$slug = context.route.params.slug
    ? context.route.params.slug
    : null
}

Vue.prototype.$api = api

Vue.prototype.$getPost = function() {
  const slug = this.$route.params.slug
  return require(`@/json/postsObject`)[slug]
}

Vue.prototype.$getPosts = function() {
  return require(`@/json/postsObject`)
}
