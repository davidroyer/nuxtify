import MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
import emoji from 'markdown-it-emoji'
import linkAttributes from 'markdown-it-link-attributes'
import Prism from 'prismjs'
require('prismjs/components/index')()

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: (code, lang) => {
    return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(
      code,
      Prism.languages[lang] || Prism.languages.markup
    )}</code></pre>`
  }
}

export default new MarkdownIt(mdOptions)
  .use(emoji)
  .use(container, 'warning')
  .use(container, 'tip')
  .use(container, 'danger')
  .use(linkAttributes, {
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })

/**
 * Alternate highlight function
 */
// highlight(str, lang) {
//   let hl
//   if (lang && Object.keys(Prism.languages).includes(lang)) {
//     try {
//       hl = Prism.highlight(str, Prism.languages[lang])
//     } catch (error) {
//       console.error(str, lang, error)
//     }
//   } else {
//     lang = '__plain__'
//     hl = md.utils.escapeHtml(str)
//   }

//   return `<pre class="language-${lang}"><code class="language-${lang}">${hl}</code></pre>`
// }
