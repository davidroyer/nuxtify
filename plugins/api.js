import * as api from '@/services/api'

// export default (context, inject) => {
//   context.$api = api
// }

export default (context, inject) => {
  // Set the function directly on the context.app object
  // app.myInjectedFunction = string =>
  //   console.log('Okay, another function', string)
  context.$api = api
  // inject('api', api)
  // const get = slug => require(`@/json/postsObject`)[slug]
  context.app.getItem = slug => require(`@/json/postsObject`)[slug]
  context.app.getAll = collection => require(`@/json/${collection}`)
}

// export const getPost = slug => require(`@/json/postsObject`)[slug]
// export const getPosts = () => require(`@/json/postsObject`)

// export const getItem = (collection, slug) =>
//   require(`@/json/${collection}`)[slug]

// export const getCollection = collection => require(`@/json${collection}`)
