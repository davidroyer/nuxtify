/* eslint-disable no-console */
import { md } from './core/md'
import watcher from './core/watcher'

const mdFileParser = require('front-matter')
const jetpack = require('fs-jetpack')
const { removeExtension, titleCaseText } = require('./utils')

const blogContentDir = `contents/blog`
const blogJsonDir = `data`
const postsArray = []

const blogContentSrc = jetpack.cwd(blogContentDir)
const blogContentApi = jetpack.cwd(blogJsonDir)
const blogContentWatcher = watcher.create(`./${blogContentDir}`)

blogContentWatcher.on('ready', function() {
  initialWrite()
})

/**
 * Handles content changing of existing files
 */
blogContentWatcher.on('change', (filepath, root, stat) => {
  const jsonState = blogContentApi.read('blog.json')
  const newPostObject = createDataObject(filepath)

  const postObjectIndex = jsonState.findIndex(
    post => post.slug === newPostObject.slug
  )

  const newJsonState = updateArrayState(
    jsonState,
    postObjectIndex,
    newPostObject
  )
  blogContentApi.write('blog.json', newJsonState)
  blogContentApi.file(`blog/${newPostObject.slug}.json`, {
    content: newPostObject
  })
})

/**
 * Handles new files created
 */
blogContentWatcher.on('add', (filepath, root, stat) => {
  const jsonState = blogContentApi.read('blog.json')
  const newPostObject = createDataObject(filepath)
  const newJsonState = [...jsonState, newPostObject]

  blogContentApi.write('blog.json', newJsonState)
  blogContentApi.write(`blog/${newPostObject.slug}.json`, newPostObject)
})

/**
 * Handles files that are deleted
 */
blogContentWatcher.on('delete', (filepath, root) => {
  const jsonState = blogContentApi.read('blog.json')
  const slugOfRemovedPost = removeExtension(filepath)

  const postObjectIndex = jsonState.findIndex(
    post => post.slug === slugOfRemovedPost
  )

  const newJsonState = removeArrayItemByIndex(jsonState, postObjectIndex)
  blogContentApi.write('blog.json', newJsonState)
  //  delete
})

/**
 * Handles setting up the json files initially
 */
function initialWrite() {
  const mdFilesArray = blogContentSrc.find({ matching: ['*.md'] })

  // Add the data to the postsArray variable we setup initially
  mdFilesArray.forEach(mdFile => {
    const postDataObject = createDataObject(mdFile)
    blogContentApi.write(`blog/${postDataObject.slug}.json`, postDataObject)
    postsArray.push(postDataObject)
  })
  blogContentApi.write('blog.json', postsArray)
}

// eslint-disable-next-line no-unused-vars
function createEntryJsonFile(name, content) {
  blogContentApi.write(`blog/${name}.json`, content)
}

function createDataObject(mdFile) {
  const mdFileData = mdFileParser(blogContentSrc.read(mdFile))

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

/* --------------------------------------------------------------------- */

// const parsedPosts = posts.map(article => mdFileParser(article))

/* --------------------------------------------------------------------- */
