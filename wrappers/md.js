import React from 'react'
import 'css/markdown-styles.scss'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Container, MarkdownContainer, SideBar, StyledLink, Stats, SmallTitle } from '../utils/components'
import {retrieveMonthlyHoF} from '../utils/fetchData'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  getInitialState() {
    return {
      contributors:  [],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      isFetchingData: true
    }
  },
  componentWillMount() {
    if(this.state.contributors.length === 0) { 
    let data = retrieveMonthlyHoF()
    setTimeout(() => {
      this.setState({
        contributors: data,
        isFetchingData: false
      })
    },3000)
     return data
    }
  },
  render () {
    const post = this.props.route.page.data
    const isTranscripts = this.props.route.path.indexOf('/transcripts/') != -1
    const isLearning = this.props.route.path.indexOf('/learning/') != -1
    const { transcriptActive, closeTranscript, toggleTranscript } = this.props
    const isStats = this.props.route.path.indexOf('/stats/') != -1
    const basis = isTranscripts ? '70%' : '100%'
    const maxWidth = isTranscripts ? '1192px' : '800px'

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
        {isTranscripts && <SideBar children={items} sidebarActive={transcriptActive} toggle={toggleTranscript} />}
        {isLearning && <SideBar toc={post.toc} isToc={isLearning} sidebarActive={transcriptActive} toggle={toggleTranscript} />}
        {isStats && <Stats children={items} post={post} months={this.state.months} contributors={this.state.contributors} isFetchingData={this.state.isFetchingData} />}
        { Markdown }
      </Container>
    )
  },
})
