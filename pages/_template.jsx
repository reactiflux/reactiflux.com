import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/styles'

import { rhythm } from '../utils/typography'
import { Header, Navigation, MenuToggle, Logo, StyledLink, NavigationLink, Footer, Copyright, Credits, IconLink, SocialLinks } from '../utils/components'
import { Discord, Twitter } from '../assets/logos.js'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuActive: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)

  }

  toggleMenu () {
    this.setState((prevState) => ({
      menuActive: !prevState.menuActive
    }))
  }

  closeMenu () {
    this.setState({
      menuActive: false
    })
  }

  render () {
    const menuActive = this.state.menuActive;

    return (
      <div style={{position: menuActive ? 'fixed' : 'inherit'}}>
        <Headroom disableInlineStyles>
          <Header>
            <Logo
              to={prefixLink('/')}
              onClick={this.closeMenu}
            >
              Reactiflux
            </Logo>
            <MenuToggle onClick={this.toggleMenu} style={{transform: menuActive ? 'rotate(180deg)': 'rotate(0deg)' }}/>
            <Navigation role="navigation" style={{top: menuActive ? 0 : '-100vh'}}>
              <NavigationLink
                to={prefixLink('/schedule/')}
                title="Q&A Schedule"
                onClick={this.closeMenu}
              >
                Q&A Schedule
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/transcripts/')}
                title="Transcripts"
                onClick={this.closeMenu}
              >
                Transcripts
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/learning/')}
                title="Learning"
                onClick={this.closeMenu}
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
          {this.props.children}
        </Container>
        <Footer>
          <div>
            <Copyright>© 2016 Reactiflux</Copyright>
            <Credits>Designed in <StyledLink href="https://www.sketchapp.com/" title="Sketc">Sketch</StyledLink>. Coded in <StyledLink href="https://atom.io/" title="Atom">Atom</StyledLink>. Built using <StyledLink href="https://github.com/gatsbyjs/gatsby" title="Gatsby">Gatsby.js</StyledLink>. Hosted on <StyledLink href="https://www.netlify.com/" title="Netlify">Netlify</StyledLink>.</Credits>
          </div>
          <SocialLinks>
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
