/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
function unhyphenate(str) {
  return str.replace(/(\w)(-)(\w)/g, '$1 $3')
}

const toTitleCase = function(str) {
  str = str.toLowerCase().split(' ')
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return unhyphenate(str.join(' '))
}

function titleCaseText(text) {
  const words = text.split('-')
  return words
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ')
}

function removeExtension(file) {
  return file.replace(/\.[^/.]+$/, '')
}

function slugify(textToSlugify) {
  return textToSlugify
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, '') // remove leading, trailing -
}

exports.slugify = slugify
exports.titleCaseText = titleCaseText
exports.toTitleCase = toTitleCase
exports.removeExtension = removeExtension
