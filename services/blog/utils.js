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

exports.titlize = toTitleCase
