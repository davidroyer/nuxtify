/* eslint-disable no-console */
export const setupRoutesMeta = routesObject => {
  for (const route in routesObject) {
    routesObject[route].seo = { meta: [] }
    if (routesObject[route].title !== false)
      routesObject[route].seo.title = routesObject[route].label
  }
}

export const createRouteMeta = (
  originalMetaArray,
  metaArrayForRouteMetaProperty
) => {
  if (metaArrayForRouteMetaProperty)
    originalMetaArray.push(...metaArrayForRouteMetaProperty)
}

export const createDefaultMeta = (baseUrl, routePath, title) => {
  if (title) {
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
  } else {
    return [
      {
        name: 'og:url',
        content: `${baseUrl}${routePath}`
      }
    ]
  }
}
