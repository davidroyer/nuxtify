/* eslint-disable no-console */
// export default () => {}

export const getPost = slug => require(`@/json/postsObject`)[slug]
export const getPosts = () => require(`@/json/postsObject`)

export const getItem = (collection, slug) => {
  console.log('getItem')
  return require(`@/json/${collection}`)[slug]
}

export const getCollection = collection => require(`@/json${collection}`)
