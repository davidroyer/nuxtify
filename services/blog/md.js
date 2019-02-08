// node.js, "classic" way:
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

exports.md = md

