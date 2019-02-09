const sane = require('sane')

module.exports = {
    create(dirToWatch, options = {}) {
        return sane(dirToWatch, options)
    }
}

// watcher.on('ready', function() {
//   console.log('ready')
// })
// watcher.on('change', function(filepath, root, stat) {
//   console.log('file changed', filepath)
//   createBlogJsonFile(BLOG_CONTENT_PATH)
// })
// watcher.on('add', function(filepath, root, stat) {
//   console.log('file added', filepath)
//   createBlogJsonFile(BLOG_CONTENT_PATH)
// })
// watcher.on('delete', function(filepath, root) {
//   console.log('file deleted', filepath)
//   createBlogJsonFile(BLOG_CONTENT_PATH)
// })