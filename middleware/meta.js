export default function({ store, route, params, $createSeo }) {
  if (params.slug) return
  const metaInfo = $createSeo(route.name, route)
  // eslint-disable-next-line no-console
  console.log('FROM MIDDLEWARE', metaInfo)
  return store.commit('setPageMeta', metaInfo)
}
