/* eslint-disable no-console */
// export default () => {}

export const getPost = slug => require(`@/_jsonApi/blog`)[slug]
export const getPosts = () => require(`@/_jsonApi/blog`)

export const getItem = (collection, slug) => {
  console.log('getItem')
  return require(`@/_jsonApi/${collection}`)[slug]
}

export const getCollection = collection => require(`@/_jsonApi/${collection}`)
