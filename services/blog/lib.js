/* eslint-disable no-console */
import mdFileParser from 'front-matter'
import jetpack from 'fs-jetpack'
import md from './core/md'
import watcher from './core/watcher'
import {
  arrayFromObject,
  createTagsList,
  removeExtension,
  slugify,
  titleCaseText
} from './utils'

const blogContentPath = `_content/blog`
const blogApiPath = `_jsonApi`

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
  console.log('Creating JSON Files from markdown files...')
  initialWrite()
})

/**
 * Handles content changing of existing files
 */
blogContentWatcher.on('change', (filepath, root, stat) => {
  const jsonState = blogApi.read('posts/index.json', 'json')
  const newPostObject = createContentObject(filepath)

  jsonState[newPostObject.slug] = newPostObject
  blogApi.write('posts/index.json', jsonState)
})

/**
 * Handles new files created
 */
blogContentWatcher.on('add', (filepath, root, stat) => {
  const jsonState = blogApi.read('posts/index.json', 'json')
  const newPostObject = createContentObject(filepath)

  jsonState[newPostObject.slug] = newPostObject
  blogApi.write('posts/index.json', jsonState)

  const tagsObject = createTagsObject(arrayFromObject(jsonState))
  blogApi.write(`tags/index.json`, tagsObject)
})

/**
 * Handles files that are deleted
 */
blogContentWatcher.on('delete', (filepath, root) => {
  const jsonState = blogApi.read('posts/index.json', 'json')
  const slugOfDeletedPost = removeExtension(filepath)

  delete jsonState[slugOfDeletedPost]
  blogApi.write('posts/index.json', jsonState)
})

/**
 * Handles setting up the json files initially
 */
function initialWrite() {
  const postsObject = {}
  const mdFilesArray = blogContent.find({ matching: ['*.md'] })

  // Add the data to the postsArray variable we setup initially
  mdFilesArray.forEach(mdFile => {
    const postDataObject = createContentObject(mdFile)
    postsObject[postDataObject.slug] = postDataObject
  })
  blogApi.write('posts/index.json', postsObject)

  /**
   * Create tags and posts JSON files
   */
  const tagsObject = createTagsObject(arrayFromObject(postsObject))
  blogApi.write(`tags/index.json`, tagsObject)
}

const createTagsObject = postsArray => {
  const tagsDataObject = {}
  const tagsList = createTagsList(postsArray)

  tagsList.forEach(tag => {
    const tagObject = createTagObject(tag, postsArray)
    tagsDataObject[tagObject.slug] = tagObject
  })
  return tagsDataObject
}

const createTagObject = (tag, postsArray) => {
  const taggedPosts = postsArray.filter(post => post.tags.includes(tag))

  return {
    name: tag,
    posts: taggedPosts,
    slug: slugify(tag),
    title: titleCaseText(tag)
  }
}

function createContentObject(mdFile) {
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

function setupBeforeInit(config) {
  jetpack.dir(config.blogApiPath, { empty: true })
}
/* --------------------------------------------------------------------- */

// const parsedPosts = posts.map(article => mdFileParser(article))

/* --------------------------------------------------------------------- */
