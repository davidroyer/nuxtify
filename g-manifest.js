/* eslint-disable no-console */
const jetpack = require('fs-jetpack')
const sane = require('sane')
const fm = require('front-matter')
const { titlize } = require('./utils/titlize')
const CONTENT_DIR = 'contents'
const BLOG_CONTENT_DIR = 'blog'

const BLOG_CONTENT_PATH = `${CONTENT_DIR}/${BLOG_CONTENT_DIR}`
/**
 * Watcher
 */

createBlogJsonFile(BLOG_CONTENT_PATH)

const watcher = sane(BLOG_CONTENT_PATH)
watcher.on('ready', function() {
  console.log('ready')
})
watcher.on('change', function(filepath, root, stat) {
  console.log('file changed', filepath)
  createBlogJsonFile(BLOG_CONTENT_PATH)
})
watcher.on('add', function(filepath, root, stat) {
  console.log('file added', filepath)
  createBlogJsonFile(BLOG_CONTENT_PATH)
})
watcher.on('delete', function(filepath, root) {
  console.log('file deleted', filepath)
  createBlogJsonFile(BLOG_CONTENT_PATH)
})

// close
// watcher.close()

function createJsonFileContent(filepath) {
  console.log('IN NEW FUNCTION')

  const mdFile = jetpack.read(`${BLOG_CONTENT_PATH}/${filepath}`)
  const mdFileName = filepath
    .replace(`${BLOG_CONTENT_PATH}/`, '')
    .replace('.md', '')
  const mdFileData = fm(mdFile)

  mdFileData.slug = mdFileName
  mdFileData.titleTest = titlize(mdFileName)
  return mdFileData
}

function createBlogJsonFile(BLOG_CONTENT_PATH) {
  const jsonData = []

  jetpack
    .find(BLOG_CONTENT_PATH, {
      matching: '**/*.md'
    })
    .forEach(function(filepath) {
      const mdFile = jetpack.read(`${filepath}`)
      const mdFileData = fm(mdFile)
      const mdFileName = filepath
        .replace(`${BLOG_CONTENT_PATH}/`, '')
        .replace('.md', '')

      mdFileData.slug = mdFileName
      mdFileData.titleTest = titlize(mdFileName)

      jsonData.push(mdFileData)
    })
  jetpack.file('data/blog.json', { content: jsonData })
}

// eslint-disable-next-line no-unused-vars
function updateBlogJsonFile(filepath) {
  const jsonData = []
  jsonData.push(createJsonFileContent(filepath))
  jetpack.file('data/blog.json', { content: jsonData })
}

const files = jetpack.list(BLOG_CONTENT_PATH)
jetpack.file('manifest.json', { content: files })
