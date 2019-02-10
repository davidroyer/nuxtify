/* eslint-disable no-console */
const jetpack = require('fs-jetpack')

const array1 = [5, 12, 8, 130, 44]

function isLargeNumber(element) {
  return element > 13
}

console.log(array1.findIndex(isLargeNumber))
// expected output: 3
