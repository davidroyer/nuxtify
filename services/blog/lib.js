/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import path from 'path';
import mdFileParser from 'front-matter';
import jetpack from 'fs-jetpack';
import md from './core/md'
import watcher from './core/watcher'
import {
  arrayFromObject,
  createTagsList,
  removeExtension,
  slugify,
  titleCaseText
} from './utils'

const ContentPath = `_content`
const ApiPath = `_jsonApi`
const Content = jetpack.cwd(ContentPath)
const API = jetpack.cwd(ApiPath)

const rootMarkdownFiles = Content.list().filter(item => /\.md$/g.test(item))
const collectionDirectories = Content.list().filter(
  item => !/\.md$/g.test(item)
)

const ContentWatcher = watcher.create(`./${ContentPath}`)

const CONFIG = {
  ContentPath,
  ApiPath,
  Content,
  API,
  ContentWatcher
}

setupBeforeInit(CONFIG)

ContentWatcher.on('ready', () => {
  console.log('Creating JSON Files from markdown files...')
  initialWrite()
  console.log('Done. Files Created!')
})

/**
 * Handles content changing of existing files
 */
ContentWatcher.on('change', (filepath, root, stat) => {
  console.log(filepath)

  const collectionName = path.dirname(filepath)
  const filename = path.basename(filepath, path.extname(filepath))
  const jsonState = API.read(`${collectionName}/index.json`, 'json')
  const newPostObject = createContentObject(filepath)

  jsonState[newPostObject.slug] = newPostObject
  API.write(`${collectionName}/index.json`, jsonState)

  // const tagsObject = createTagsObject(arrayFromObject(jsonState))
  // API.write(`tags/index.json`, tagsObject)
})

/**
 * Handles new files created
 */
ContentWatcher.on('add', (filepath, root, stat) => {
  const jsonState = API.read(`${path.dirname(filepath)}/index.json`, 'json')
  const newPostObject = createContentObject(filepath)

  jsonState[newPostObject.slug] = newPostObject
  API.write(`${path.dirname(filepath)}/index.json`, jsonState)

  // const tagsObject = createTagsObject(arrayFromObject(jsonState))
  // API.write(`tags/index.json`, tagsObject)
})

/**
 * Handles files that are deleted
 */
ContentWatcher.on('delete', (filepath, root) => {
  const jsonState = API.read(`${path.dirname(filepath)}/index.json`, 'json')
  const slugOfDeletedPost = removeExtension(filepath)

  delete jsonState[slugOfDeletedPost]
  API.write(`${path.dirname(filepath)}/index.json`, jsonState)

  // const tagsObject = createTagsObject(arrayFromObject(jsonState))
  // API.write(`tags/index.json`, tagsObject)
})

/**
 * Handles setting up the json files initially
 */
function initialWrite() {
  collectionDirectories.forEach(collection => {
    const collectionObject = {}
    const mdFilesArray = Content.find(collection, {
      matching: './*.md'
    })

    // Add the data to the postsArray variable we setup initially
    mdFilesArray.forEach(mdFile => {
      const contentData = createContentObject(mdFile)
      collectionObject[contentData.slug] = contentData
    })
    API.write(`${collection}/index.json`, collectionObject)

    /**
     * Create tags and posts JSON files
     */
    const tagsObject = createTagsObject(arrayFromObject(collectionObject))
    API.write(`${collection}/tags/index.json`, tagsObject)
  })
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
  const fileName = getFileName(mdFile)
  const mdFileData = mdFileParser(Content.read(mdFile))
  // If slug is not set, automatically generate it from the filename by removing the extension
  const slug = mdFileData.attributes.slug
    ? mdFileData.attributes.slug
    : fileName

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

const getDirectoryName = filepath => path.dirname(filepath)
const getFileName = filepath => path.basename(filepath, path.extname(filepath))

function setupBeforeInit(config) {
  jetpack.dir(config.ApiPath, {
    empty: true
  })
}
/* --------------------------------------------------------------------- */

// const parsedPosts = posts.map(article => mdFileParser(article))

/* --------------------------------------------------------------------- */
