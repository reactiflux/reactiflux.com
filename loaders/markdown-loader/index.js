var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;
var hljs = require('highlight.js')
var objectAssign = require('object-assign')

var highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight,
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'))
  .use(markdownItTocAndAnchor, {
    tocLastLevel: 2,
    anchorLinkSymbol: ''
  })

module.exports = function (content) {
  this.cacheable()
  var toc
  const meta = frontMatter(content)
  const body = md.render(meta.body, {
    tocCallback: function(tocMarkdown, tocArray, tocHtml) {
      toc = tocHtml
    }
  })
  const result = objectAssign({}, meta.attributes, {
    body,
    toc
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
