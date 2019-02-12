const generateRoutes = function(routesObject) {
  // const routesArray = []
  return Object.keys(routesObject).map(routeSlug => `/blog/${routeSlug}`)

  // for (const route in routesObject) {
  //   routesArray.push(posts[post])
  // }
  // return routesData.map(post => {
  //   return `/blog/${post.slug}`
  // })
}

exports.generateRoutes = generateRoutes
