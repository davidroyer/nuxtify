const generateRoutes = function(routesObject) {
  return Object.keys(routesObject).map(routeSlug => `/blog/${routeSlug}`)
}

exports.generateRoutes = generateRoutes
