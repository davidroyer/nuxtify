export default function({ store, params, route, $api }) {
  if (module.hot) {
    module.hot.accept()
  }
  if (params.slug) {
    const post = $api.getItem('postsObject', params.slug)
    // const post = await import(`~/contents/blog/${params.slug}.md`)
    // const post = await import(`~/contents/blog/${params.slug}.md`)
    store.commit('setPost', post)
  }
}
