/* eslint-disable no-console */
// import * as api from '@/services/api'
// import CollectionsApi from '@/services/api'
const collectionRoutes = ['blog', 'projects']

export default (context, inject) => {
  const [baseRoute] = context.route.name.split('-')

  if (context.isDev) {
    console.log('isDev - Should inject collections and collection items')

    if (collectionRoutes.includes(baseRoute)) {
      if (context.params.slug) {
        inject(
          'collectionItem',
          require(`@/_jsonApi/${baseRoute}`)[context.params.slug].slug
        )
      } else {
        inject('getCollection', require(`@/_jsonApi/${baseRoute}`))
      }
    }
  }

  // if (context.params.slug) {
  //   slug = context.params.slug
  //   collectionItem = context.route
  // } else {
  //   slug = null
  //   collectionItem = null
  // }
  // inject('slug', slug)

  inject('get', (collection, slug) => {
    if (slug) {
      return require(`@/_jsonApi/${collection}`)[slug]
    } else {
      return require(`@/_jsonApi/${collection}`)
    }
  })

  // inject('get', (collection, slug) => get(collection, slug))

  // inject('getPost', slug => require(`@/_jsonApi/blog`)[slug])
  // inject('getPosts', () => require(`@/_jsonApi/blog`))
}
