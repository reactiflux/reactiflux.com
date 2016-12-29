import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/styles'

import { rhythm } from '../utils/typography'
import { Header, Navigation, Logo, StyledLink, NavigationLink, Footer, Copyright, Credits, IconLink, SocialLinks } from '../utils/components'
import Discord from '../assets/discord.svg'
import Twitter from '../assets/twitter.svg'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom disableInlineStyles>
          <Header>
            <Logo
              to={prefixLink('/')}
            >
              Reactiflux
            </Logo>
            <Navigation role="navigation">
              <NavigationLink
                to={prefixLink('/q-and-a/')}
                title="Question and answers schedule"
              >
                Q&A Schedule
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/transcripts/')}
                title="Transcripts"
              >
                Transcripts
              </NavigationLink>
              <NavigationLink
                to={prefixLink('/links/')}
                title="Links"
              >
                Links
              </NavigationLink>
            </Navigation>
          </Header>
        </Headroom>
        <Container
          style={{
            maxWidth: 1192,
            padding: `0 ${rhythm(3/4)} ${rhythm(1)} ${rhythm(3/4)}`,
            marginBottom: 90,
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
  },
})
