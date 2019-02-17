/* eslint-disable no-console */
import path from 'path';
import jetpack from 'fs-jetpack';

const contentDirectoryName = `_content`
const apiDirectoryName = `_jsonApi`

const CONTENT = jetpack.cwd(contentDirectoryName)
const API = jetpack.cwd(apiDirectoryName)

const filePath = `` // get from watcher
const collectionName = path.dirname(filePath)
const fileName = path.basename(filePath, path.extname(filePath))

export function getCollectionTypes(contentDir) {
  return jetpack.list(contentDir).filter(item => !/(^|\/)\.[^\/\.]/g.test(item))
}

const rootMarkdownFiles = CONTENT.list().filter(item => /\.md$/g.test(item))
const collectionDirectories = CONTENT.list().filter(
  item => !/\.md$/g.test(item)
)

console.log(collectionDirectories)
console.log(rootMarkdownFiles)

console.log(collectionName)
console.log(fileName)
