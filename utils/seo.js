/* eslint-disable no-console */
export const setupRoutesSeoProperties = routesObject => {
  for (const route in routesObject) {
    // console.log('TCL: routesObject', routesObject)

    routesObject[route].seo = {}
    routesObject[route].seo.title = routesObject[route].label
    routesObject[route].seo.meta = []
  }
}

export const handleRouteMetaArray = (
  originalMetaArray,
  metaArrayForRouteMetaProperty
) => {
  if (metaArrayForRouteMetaProperty) {
    originalMetaArray.push(...metaArrayForRouteMetaProperty)
  }
}

export const createDefaultMetaArray = (title, baseUrl, routePath) => {
  return [
    {
      hid: 'og:title',
      name: 'og:title',
      property: 'og:title',
      content: title
    },
    {
      name: 'og:url',
      content: `${baseUrl}${routePath}`
    }
  ]
}
