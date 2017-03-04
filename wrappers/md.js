import React from 'react'
import 'css/markdown-styles.scss'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Container, MarkdownContainer, SideBar, StyledLink, SmallTitle, Transcript } from '../utils/components'

export default class Markdown extends React.Component {
  render () {
    const post = this.props.route.page.data
    const isTranscripts = this.props.route.path.indexOf('/transcripts/') != -1
    const isLearning = this.props.route.path.indexOf('/learning/') != -1
    const { toc, transcript, close, toggle } = this.props

    const articles = this.props.route.pages.filter((route) => {
        if (route.path !== '/transcripts/' && route.path.indexOf('/transcripts/') != -1)
          return route;
    });

    articles.sort((a, b) => {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    })

    const items = articles.map((article) => {
      return <li key={article.data.title}><StyledLink onClick={close('transcript')} to={article.path} title={article.data.title}>{article.data.title}</StyledLink></li>
    });
    const Markdown = isTranscripts ? 
      <Transcript article={post} />
      : (<MarkdownContainer className="markdown" dangerouslySetInnerHTML={{ __html: post.body }} />)

    return (
      <Container>
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <SmallTitle>{post.title}</SmallTitle>
        {isTranscripts && <SideBar children={items} active={transcript} toggle={toggle('transcript')} />}
        {isLearning && <SideBar toc={post.toc} isToc={isLearning} active={toc} toggle={toggle('toc')} />}
        { Markdown }
      </Container>
    )
  }
}
