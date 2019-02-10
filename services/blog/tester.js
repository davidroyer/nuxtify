/* eslint-disable no-console */
// import findIndex from 'array.prototype.findindex'
import { md } from './core/md'
import watcher from './core/watcher'

// require('array.prototype.findindex')
const mdFileParser = require('front-matter')
const jetpack = require('fs-jetpack')
const { removeExtension, titleCaseText } = require('./utils')

const blogContentPath = `contents/blog`
const blogApiPath = `data`
const postsArray = []

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

blogContentWatcher.on('ready', function() {
  initialWrite()
})

/**
 * Handles content changing of existing files
 */
blogContentWatcher.on('change', (filepath, root, stat) => {
  const jsonState = blogApi.read('blog.json', 'json')
  const newPostObject = createDataObject(filepath)

  const postObjectIndex = jsonState.findIndex(
    post => post.slug === newPostObject.slug
  )

  const newJsonState = updateArrayState(
    jsonState,
    postObjectIndex,
    newPostObject
  )
  blogApi.write('blog.json', newJsonState)
  blogApi.write(`blog/${newPostObject.slug}.json`, newPostObject)
})

/**
 * Handles new files created
 */
blogContentWatcher.on('add', (filepath, root, stat) => {
  const jsonState = blogApi.read('blog.json', 'json')
  const newPostObject = createDataObject(filepath)
  const newJsonState = [...jsonState, newPostObject]

  blogApi.file('blog.json', { content: newJsonState })
  blogApi.write(`blog/${newPostObject.slug}.json`, newPostObject)

  /**
   * This is being handled in the `change` event for now
   * so it's commented it out
   */
})

/**
 * Handles files that are deleted
 */
blogContentWatcher.on('delete', (filepath, root) => {
  const jsonState = blogApi.read('blog.json', 'json')
  const slugOfDeletedPost = removeExtension(filepath)
  const postObjectIndex = jsonState.findIndex(
    post => post.slug === slugOfDeletedPost
  )

  const newJsonState = removeArrayItemByIndex(jsonState, postObjectIndex)

  blogApi.write('blog.json', newJsonState)
  blogApi.remove(`blog/${slugOfDeletedPost}.json`)
  //  delete
})

/**
 * Handles setting up the json files initially
 */
function initialWrite() {
  console.log('Creating JSON Files from your markdown files...')

  const mdFilesArray = blogContent.find({ matching: ['*.md'] })

  // Add the data to the postsArray variable we setup initially
  mdFilesArray.forEach(mdFile => {
    const postDataObject = createDataObject(mdFile)
    blogApi.write(`blog/${postDataObject.slug}.json`, postDataObject)
    postsArray.push(postDataObject)
  })
  blogApi.write('blog.json', postsArray)
}

// eslint-disable-next-line no-unused-vars
function createEntryJsonFile(name, content) {
  blogApi.write(`blog/${name}.json`, content)
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

  return {
    title,
    slug,
    html: md.render(mdFileData.body),
    markdown: mdFileData.body,
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
