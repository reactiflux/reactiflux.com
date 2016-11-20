import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import axios from 'axios';
import { Title, Subtitle, Text, Button, IconLink } from '../utils/components';
import ReactLogo from '../assets/react.svg';
import NativeLogo from '../assets/native.svg';
import ReduxLogo from '../assets/redux.svg';
import RelayLogo from '../assets/relay.svg';
import GraphLogo from '../assets/graphql.svg';
import FacebookLogo from '../assets/facebook.svg';
import ConsoleLogo from '../assets/console.svg';
import CommunityLogo from '../assets/community.svg'

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      count: 0
    }
  }

  componentWillMount() {
    axios.get('http://rf.pipend.com/apis/branches/prKzXdM/execute/false/transformation?from=&to=&ago=1%20year&bucketSize=604800000&sampleSize=5&refreshCount=0')
      .then((response) => {
        return response.data
      }).then((json) => {
        this.setState({
          fetching: false,
          count: json[json.length-1][1],
        });
      })
  }

  render () {
    const { fetching, count } = this.state;
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Title>
          <Subtitle>Welcome to</Subtitle>
          Reactiflux
        </Title>
        <Text>
          We're a chat community of <Counter isFetching={fetching} count={count} /> React JS <IconLink to="https://github.com/facebook/react" title="React JS" src={ReactLogo} alt="React Logo"/>,
          React Native <IconLink to="https://github.com/facebook/react-native" title="React Native" src={NativeLogo} alt="React Native Logo"/>, Redux <IconLink to="https://github.com/reactjs/redux" title="Redux" src={ReduxLogo} alt="Redux Logo"/>,
          Relay <IconLink to="https://github.com/facebook/relay" title="Relay" src={RelayLogo} alt="Relay Logo"/> and
          GraphQL <IconLink to="https://github.com/facebook/graphql" title="GraphQL" src={GraphLogo} alt="GraphQL Logo"/> developers.
          We hold Q&A's with Facebook Engineers <IconLink to="https://github.com/facebook" title="Facebook Organization" src={FacebookLogo} alt="Facebook Logo"/> and
          other developers <IconLink to="https://github.com/reactiflux" title="Reactiflux Developers" src={ConsoleLogo} alt="Developers Logo"/> in
          the community <IconLink to="https://discordapp.com/invite/0ZcbPKXt5bYZVCkR" title="Reactiflux Discord" src={CommunityLogo} alt="Community Logo"/>. Come chat about tech
          related to React & JavaScript or ask for help!
        </Text>
        <Button primary href="https://discordapp.com/invite/0ZcbPKXt5bYZVCkR" title="Reactiflux Discord">Join Reactiflux</Button>
        <Button to={prefixLink('/q-and-a/')} title="Question and answers">Q&A Schedule</Button>
      </div>
    )
  }
}

const Counter = ({ isFetching, count }) =>
  <span>
    { isFetching ? 'Still counting' : count }
  </span>
