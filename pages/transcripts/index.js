import React from 'react'
import Helmet from "react-helmet"
import { Container, Title, MarkdownContainer, LinkList, StyledLink } from '../../utils/components'

export default class Transcripts extends React.Component {
  render () {
    const articles = this.props.route.pages.filter((route) => {
        if(route.path !== '/transcripts/' && route.path.indexOf('/transcripts/') != -1)
          return route;
    });

    const items = articles.map((article) => {
      return <li><StyledLink to={article.path} title={article.data.title}>{article.data.title}</StyledLink></li>
    });

    articles.sort((a, b) => {
      return new Date(a.data.date) < new Date(b.data.date)
    })

    const newestArticle = articles[0].data



    return (
      <Container>
        <Helmet
          title={'Reactiflux transcripts'}
        />
        <Title secondary>{newestArticle.title}</Title>
        <LinkList>{items}</LinkList>
        <MarkdownContainer className="markdown" style={{flexBasis: '70%'}}  dangerouslySetInnerHTML={{ __html: newestArticle.body }}/>
      </Container>
    )
  }
}
