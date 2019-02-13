// export default () => {}

export const getPost = slug => require(`@/json/postsObject`)[slug]
export const getPosts = () => require(`@/json/postsObject`)

export const getItem = (collection, slug) =>
  require(`@/json/${collection}`)[slug]

export const getCollection = collection => require(`@/json${collection}`)
