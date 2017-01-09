import React from 'react'
import 'css/markdown-styles.scss'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Container, MarkdownContainer, SideBar, StyledLink, SmallTitle } from '../utils/components'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    const isTranscripts = this.props.route.path.indexOf('/transcripts/') != -1
    const { transcriptActive, closeTranscript, toggleTranscript } = this.props

    const articles = this.props.route.pages.filter((route) => {
        if(route.path !== '/transcripts/' && route.path.indexOf('/transcripts/') != -1)
          return route;
    });

    const items = articles.map((article) => {
      return <li key={article.data.title}><StyledLink onClick={closeTranscript} to={article.path} title={article.data.title}>{article.data.title}</StyledLink></li>
    });
    const Markdown = isTranscripts ?
      <MarkdownContainer transcript className="markdown" dangerouslySetInnerHTML={{ __html: post.body }} /> :
      <MarkdownContainer className="markdown" dangerouslySetInnerHTML={{ __html: post.body }} />

    return (
      <Container>
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <SmallTitle>{post.title}</SmallTitle>
        {isTranscripts && <SideBar children={items} transcriptActive={transcriptActive} toggleTranscript={toggleTranscript} />}
        { Markdown }
      </Container>
    )
  },
})
