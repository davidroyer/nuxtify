/* eslint-disable no-console */
import mdFileParser from 'front-matter'
import jetpack from 'fs-jetpack'
import md from './core/md'
import watcher from './core/watcher'
import {
  createTagsList,
  getPostsFromTag,
  removeExtension,
  titleCaseText
} from './utils'

const blogContentPath = `contents/blog`
const blogApiPath = `data`
const postsArray = []
const postsObject = {}

const blogContent = jetpack.cwd(blogContentPath)
const blogApi = jetpack.cwd(blogApiPath)
const blogContentWatcher = watcher.create(`./${blogContentPath}`)

const CONFIG = {
  blogContentPath,
  blogApiPath,
  blogContent,
  blogApi,
  blogContentWatcher
}

setupBeforeInit(CONFIG)

blogContentWatcher.on('ready', () => {
  initialWrite()
})

/**
 * Handles content changing of existing files
 */
blogContentWatcher.on('change', (filepath, root, stat) => {
  const testPostsObjectState = blogApi.read('postsObject/index.json', 'json')
  const jsonState = blogApi.read('blog/index.json', 'json')

  const newPostObject = createDataObject(filepath)

  const postObjectIndex = jsonState.findIndex(
    post => post.slug === newPostObject.slug
  )

  const postKeyInObject = newPostObject.slug

  testPostsObjectState[postKeyInObject] = newPostObject

  const newJsonState = updateArrayState(
    jsonState,
    postObjectIndex,
    newPostObject
  )
  blogApi.write('postsObject/index.json', testPostsObjectState)
  blogApi.write('blog/index.json', newJsonState)
  blogApi.write(`blog/${newPostObject.slug}.json`, newPostObject)
})

/**
 * Handles new files created
 */
blogContentWatcher.on('add', (filepath, root, stat) => {
  const jsonState = blogApi.read('blog/index.json', 'json')
  const newPostObject = createDataObject(filepath)
  const newJsonState = [...jsonState, newPostObject]

  blogApi.write('blog/index.json', newJsonState)
  blogApi.write(`blog/${newPostObject.slug}.json`, newPostObject)
})

/**
 * Handles files that are deleted
 */
blogContentWatcher.on('delete', (filepath, root) => {
  const jsonState = blogApi.read('blog/index.json', 'json')
  const slugOfDeletedPost = removeExtension(filepath)
  const postObjectIndex = jsonState.findIndex(
    post => post.slug === slugOfDeletedPost
  )

  const newJsonState = removeArrayItemByIndex(jsonState, postObjectIndex)
  blogApi.write('blog/index.json', newJsonState)
  blogApi.remove(`blog/${slugOfDeletedPost}.json`)
})

/**
 * Handles setting up the json files initially
 */
function initialWrite() {
  console.log('Creating JSON Files from markdown files...')
  const mdFilesArray = blogContent.find({ matching: ['*.md'] })

  // Add the data to the postsArray variable we setup initially
  mdFilesArray.forEach(mdFile => {
    const postDataObject = createDataObject(mdFile)
    postsArray.push(postDataObject)
    postsObject[postDataObject.slug] = postDataObject
    blogApi.write(`blog/${postDataObject.slug}.json`, postDataObject)
  })

  blogApi.write('blog/index.json', postsArray)
  blogApi.write('postsObject/index.json', postsObject)
  console.log('Creation completed.')

  /**
   * Create tags
   */
  const tagsList = createTagsList(postsArray)
  const tagsArray = tagsList.map(tag => {
    return getPostsFromTag(postsArray, tag)
  })
  blogApi.write(`tags.json`, tagsArray)
}

function createDataObject(mdFile) {
  const mdFileData = mdFileParser(blogContent.read(mdFile))

  // If slug is not set, automatically generate it from the filename by removing the extension
  const slug = mdFileData.attributes.slug
    ? mdFileData.attributes.slug
    : removeExtension(mdFile)

  // If title is not set, automatically generate it from the slug
  const title = mdFileData.attributes.title
    ? mdFileData.attributes.title
    : titleCaseText(slug)

  const tags = mdFileData.attributes.tags ? mdFileData.attributes.tags : []

  return {
    title,
    slug,
    tags,
    html: md.render(mdFileData.body),
    ...mdFileData.attributes
  }
}

function updateArrayState(array, index, newObjectValue) {
  const ret = array.slice(0)
  ret[index] = newObjectValue
  return ret
}

function removeArrayItemByIndex(arr, indexToRemove) {
  arr.splice(indexToRemove, 1)
  return arr
}

function setupBeforeInit(config) {
  jetpack.dir(config.blogApiPath, { empty: true })
}
/* --------------------------------------------------------------------- */

// const parsedPosts = posts.map(article => mdFileParser(article))

/* --------------------------------------------------------------------- */
