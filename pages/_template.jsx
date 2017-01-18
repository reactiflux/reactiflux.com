import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/styles'

import { rhythm } from '../utils/typography'
import {
  Header,
  Navigation,
  Toggle,
  Logo,
  StyledLink,
  NavigationLink,
  Footer,
  Copyright,
  Credits,
  IconLink,
  SocialLinks
} from '../utils/components'
import { Discord, Twitter, Github } from '../assets/logos.js'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    const undef = typeof window !== 'undefined'
    this.state = {
      menu: false,
      transcript: undef ? window.innerWidth < 768 ? false : true : false,
      toc: true,
      width: undef ? window.innerWidth : null
    }
  }

  componentDidMount() {
      window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (this.onMobile()) {
      const { transcript, toc } = this.state
      if (!transcript || !toc) {
        this.setState({
          transcript: true,
          toc: true
        })
      }
    }
  }

  onMobile = () => window.innerWidth <= 768


  toggle = (item) => () => {
    this.setState((prevState) => ({
      [item]: !prevState[item]
    }))
  }

  close = (item) => () => {
    if (this.onMobile()) {
      this.setState({
        [item]: false
      })
    }
  }

  render () {
    const { menu, transcript, toc } = this.state
    const closeMenu = this.close('menu')

    const children = React.Children.map(
      this.props.children,
      (child) =>
        React.cloneElement(
          child,
          { transcript, toc, toggle: this.toggle, close: this.close }
        )
    )

    return (
      <div style={{position: menu ? 'fixed' : 'inherit'}}>
        <Headroom disableInlineStyles>
          <Header>
            <Logo
              to={prefixLink('/')}
              onClick={closeMenu}
            >
              Reactiflux
            </Logo>
            <Toggle onClick={this.toggle('menu')} active={menu} />
            <Navigation role="navigation" style={{top: menu ? 0 : '-100vh'}}>
              <NavigationLink
                to={prefixLink('/schedule/')}
                title="Q&A Schedule"
                onClick={closeMenu}
              >
                Q&A Schedule
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/transcripts/')}
                title="Transcripts"
                onClick={closeMenu}
              >
                Transcripts
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/stats/')}
                title="Stats"
                onClick={this.closeMenu}
              >
                Stats
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/learning/')}
                title="Learning"
                onClick={closeMenu}
              >
                Learning
              </NavigationLink>
            </Navigation>
          </Header>
        </Headroom>
        <Container
          style={{
            maxWidth: 1192,
            padding: `0 ${rhythm(3/4)} ${rhythm(1)} ${rhythm(3/4)}`,
            marginBottom: 70,
          }}
        >
          { children }
        </Container>
        <Footer>
          <div>
            <Copyright>© 2016 Reactiflux</Copyright>
            <Credits>
              {'Designed in '}
              <StyledLink href="https://www.sketchapp.com/" title="Sketch">
                Sketch
              </StyledLink>
              {'. Coded in '}
              <StyledLink href="https://atom.io/" title="Atom">
                Atom
              </StyledLink>
              {'. Built using '}
              <StyledLink href="https://github.com/gatsbyjs/gatsby" title="Gatsby">
                Gatsby.js
              </StyledLink>
              {'. Hosted on '}
              <StyledLink href="https://www.netlify.com/" title="Netlify">
                Netlify
              </StyledLink>
              .
            </Credits>
          </div>
          <SocialLinks>
            <IconLink
              to="https://github.com/reactiflux/reactiflux.com"
              tittle="Reactiflux web repository"
              src={Github}
              alt="Github"
              target="_blank"
            />
            <IconLink
              to="https://discordapp.com/invite/0ZcbPKXt5bYZVCkR"
              tittle="Reactiflux Discord"
              src={Discord}
              alt="Discord"
              target="_blank"
            />
            <IconLink
              to="https://twitter.com/reactiflux"
              title="Reactiflux Twitter"
              src={Twitter}
              alt="Twitter"
              target="_blank"
            />
          </SocialLinks>
        </Footer>
      </div>
    )
  }
}
