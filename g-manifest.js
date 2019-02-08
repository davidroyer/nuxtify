/* eslint-disable no-console */
const fs = require('fs')
const jetpack = require('fs-jetpack')
const fm = require('front-matter')

const jsonData = []

const files = jetpack.list('contents')
jetpack.file('manifest.json', { content: files })

jetpack
  .find('contents/blog', {
    matching: '*.md'
  })
  .forEach(function(file) {
    const mdFile = jetpack.read(file)
    const mdFileData = fm(mdFile)
    jsonData.push(mdFileData)
    // console.log(mdFileData)
  })
jetpack.file('md-api.json', { content: jsonData })
jetpack.file('data/blog.json', { content: jsonData })

// files.foreach(file => {
//   // eslint-disable-next-line no-console
//   console.log('FIRED')
//   jetpack.read(`contents/blog/${file}`, data => {
//     jetpack.file('manifest.json', { content: fm(data) })

//     // Now you need to add the URL and file path to a file "/manifest.json"
//   })
// })

// fs.readdir('contents/blog', files => {
//   files.forEach(file => {
//     fs.readFile(`contents/blog/${file}`, data => {
//       console.log(data)

//       // Now you need to add the URL and file path to a file "/manifest.json"
//     })
//   })
// })
