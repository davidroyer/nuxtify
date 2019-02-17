export const generateRoutes = (routesPath, routesData) => {
  return Object.keys(routesData).map(routeSlug => `/${routesPath}/${routeSlug}`)
}

// export const generateRoutes = (routesPath, collectionName = routesPath) => {
//   const routesData = require(`./_jsonApi/${collectionName}/index.json`)
//   return Object.keys(routesData).map(routeSlug => `/${routesPath}/${routeSlug}`)
// }
