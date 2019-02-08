
const generateRoutes = function(routesData) {
  return routesData.map((post) => {
    return '/blog/' + post.slug
  })
}

exports.generateRoutes = generateRoutes