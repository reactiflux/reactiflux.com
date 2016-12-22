import React from 'react'
import 'css/markdown-styles.scss'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Container, LinkList, StyledLink, Title } from '../utils/components'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    const isQaA = this.props.route.path.indexOf('/q-and-a/') != -1

    const articles = this.props.route.pages.filter((route) => {
        if(route.path !== '/q-and-a/' && route.path.indexOf('/q-and-a/') != -1)
          return route;
    });

    const items = articles.map((article) => {
      return <li><StyledLink to={article.path} title={article.data.title}>{article.data.title}</StyledLink></li>
    });

    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <Title>{post.title}</Title>
        <Container>
          {isQaA && <LinkList>{items}</LinkList>}
          <div style={{margin: '0 auto', flexBasis: '70%'}} dangerouslySetInnerHTML={{ __html: post.body }} />
        </Container>
      </div>
    )
  },
})
