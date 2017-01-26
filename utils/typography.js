import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Work Sans', 'sans-serif'],
  baseFontSize: '19px',
  baseLineHeight: 1.5,
  scale: 1,
  plugins: [
    new CodePlugin(),
  ],
  overrideStyles: () => ({
    table: {
      width: 'calc(100vw - 2.25rem)',
      tableLayout: 'fixed',
      wordWrap: 'break-word',
    },
    '@media (min-width:768px)': {
      table: {
        width: '100%',
      },
    },
    'th:first-child, td:first-child': {
      width: '30%',
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
