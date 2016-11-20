import React from 'react'
import 'css/markdown-styles.scss'
import Helmet from "react-helmet"
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        <div style={{margin: '0 auto', maxWidth: 800}} dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  },
})
