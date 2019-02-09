/* eslint-disable no-console */
const jetpack = require('fs-jetpack')
const sane = require('sane')
const fm = require('front-matter')
const { titlize } = require('./utils')
const {md} = require('./md')

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


function createBlogJsonFile(BLOG_CONTENT_PATH) {
  const jsonData = []

  jetpack
    .find(BLOG_CONTENT_PATH, {
      matching: '**/*.md'
    })
    .forEach(function(filepath) {
        const mdFileName = filepath
        .replace(`${BLOG_CONTENT_PATH}/`, '')
        .replace('.md', '');

        const mdFileJson = transformMarkdownData(filepath, mdFileName)
        jetpack.file(`data/blog/${mdFileName}.json`, { content: mdFileJson })
        jsonData.push(mdFileJson)
    })
  jetpack.file('data/blog.json', { content: jsonData })
}


function transformMarkdownData(filepath, mdFileName) {
    const mdFile = jetpack.read(`${filepath}`)
    const mdFileData = fm(mdFile)

    mdFileData.html = md.render(mdFileData.body);
    mdFileData.slug = mdFileName
    mdFileData.titleTest = titlize(mdFileName)
    delete mdFileData.body

    return mdFileData
}

const files = jetpack.list(BLOG_CONTENT_PATH)
jetpack.file('manifest.json', { content: files })
