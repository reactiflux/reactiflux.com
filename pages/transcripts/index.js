import React from 'react'
import Helmet from "react-helmet"
import {
  Container,
  SmallTitle,
  SideBar,
  Transcript,
  StyledLink
} from '../../utils/components'


export default class Transcripts extends React.Component {

  render () {
    const articles = this.props.route.pages.filter((route) =>
      route.path !== '/transcripts/' &&
      route.path.indexOf('/transcripts/') != -1
    );

    const { transcript, close, toggle } = this.props

    articles.sort((a, b) => {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    })

    const items = articles.map((article) =>
      <li key={ article.data.title }>
        <StyledLink
          onClick={ close('transcript') }
          to={ article.path }
          title={ article.data.title }
        >
          {article.data.title}
        </StyledLink>
      </li>
    );

    const newestArticle = articles[0].data

    return (
      <Container>
        <Helmet
          title={'Reactiflux transcripts'}
        />
        <SmallTitle>{newestArticle.title}</SmallTitle>
        <SideBar
          children={items}
          active={transcript}
          toggle={toggle('transcript')}
        />
        <Transcript article={newestArticle} />
      </Container>
    )
  }
}
