/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
export const uniqueArray = originalArray => [...new Set(originalArray)]

export function unhyphenate(str) {
  return str.replace(/(\w)(-)(\w)/g, '$1 $3')
}

export const toTitleCase = function(str) {
  str = str.toLowerCase().split(' ')
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return unhyphenate(str.join(' '))
}

export function titleCaseText(text) {
  const words = text.split('-')
  return words
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ')
}

export function removeExtension(file) {
  return file.replace(/\.[^/.]+$/, '')
}

export function slugify(textToSlugify) {
  return textToSlugify
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, '') // remove leading, trailing -
}

export const createTagsList = postsArray => {
  const tagsArray = []
  postsArray.forEach(post => {
    if (post.tags.length) {
      post.tags.forEach(tag => tagsArray.push(tag))
    }
  })
  return uniqueArray(tagsArray)
}

export const getPostsFromTag = (posts, tag) =>
  posts.filter(post => post.tags.map(tag => slugifyText(tag)).includes(tag))

export const slugifyText = str =>
  slugify(str, { replacement: '-', lower: true, remove: /[$*_+~.()'"!\-:@]/g })

export const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })))

export const arrayFromObject = object =>
  Object.keys(object).map(key => object[key])
