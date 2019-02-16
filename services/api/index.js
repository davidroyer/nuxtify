/* eslint-disable no-console */
// export default () => {}

export const getPost = slug => require(`@/_jsonApi/posts`)[slug]
export const getPosts = () => require(`@/_jsonApi/posts`)

export const getItem = (collection, slug) => {
  console.log('getItem')
  return require(`@/_jsonApi/${collection}`)[slug]
}

export const getCollection = collection => require(`@/_jsonApi${collection}`)
