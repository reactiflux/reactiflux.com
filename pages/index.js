import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { FrontPage, TitleBox, Title, Subtitle, Text, Buttons, Button, IconLink } from '../utils/components'
import { Community, Console, Facebook, GraphQL, Jest, ReactNative, ReactLogo, Redux, Relay } from '../assets/logos'

export default class Index extends React.Component {
  render () {
    return (
      <FrontPage>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "We’re a chat community of 50,000+ React JS, React Native, Redux, Relay and GraphQL developers."}
          ]}
        />
        <TitleBox>
          <Title>Reactiflux</Title>
          <Subtitle>Welcome to</Subtitle>
        </TitleBox>
        <Text>
          We&rsquo;re a chat community of 50,000+ React&nbsp;JS&nbsp;<IconLink to="https://github.com/facebook/react" target="_blank" title="React JS" src={ReactLogo} alt="React Logo"/>, React&nbsp;Native&nbsp;<IconLink to="https://github.com/facebook/react-native" target="_blank" title="React Native" src={ReactNative} alt="React Native Logo"/>, Redux&nbsp;<IconLink to="https://github.com/reactjs/redux" target="_blank" title="Redux" src={Redux} alt="Redux Logo"/>,
          Jest&nbsp;<IconLink to="https://github.com/facebook/jest" target="_blank" title="Jest" src={Jest} alt="Jest Logo"/>, Relay&nbsp;<IconLink to="https://github.com/facebook/relay" target="_blank" title="Relay" src={Relay} alt="Relay Logo"/> and
          GraphQL&nbsp;<IconLink to="https://github.com/facebook/graphql" target="_blank" title="GraphQL" src={GraphQL} alt="GraphQL Logo"/> developers.
          We hold Q&amp;A&rsquo;s with Facebook Engineers&nbsp;<IconLink to="https://github.com/facebook" target="_blank" title="Facebook Organization" src={Facebook} alt="Facebook Logo"/> and
          other developers&nbsp;<IconLink to="https://github.com/reactiflux" target="_blank" title="Reactiflux Developers" src={Console} alt="Developers Logo"/> in
          the community&nbsp;<IconLink to="https://discordapp.com/invite/0ZcbPKXt5bYZVCkR" target="_blank" title="Reactiflux Discord" src={Community} alt="Community Logo"/>. Come chat about tech
          related to React & JavaScript or ask for help!
        </Text>
        <Buttons>
          <Button primary href="https://discordapp.com/invite/reactiflux" target="_blank" title="Reactiflux Discord">Join Reactiflux</Button>
          <Button to={prefixLink('/schedule/')} title="Q&A Schedule">Q&A Schedule</Button>
        </Buttons>
      </FrontPage>
    )
  }
}
