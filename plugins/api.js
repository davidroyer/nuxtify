import * as api from '@/services/api'
import Vue from 'vue'

export default (context, inject) => {
  Vue.prototype.$slug = context.route.params.slug
    ? context.route.params.slug
    : null
}

Vue.prototype.$api = api

Vue.prototype.$getPost = function(slug) {
  return require(`@/json/postsObject`)[slug]
}
