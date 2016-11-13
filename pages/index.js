import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import axios from 'axios';

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
        <h1>
          Welcome to Reactiflux!
        </h1>
        <p>
          We are a sweet community of <Counter isFetching={fetching} count={count} /> React, React Native, Relay and GraphQL developers.
          We organize Q&A's with Facebook Engineers and other interesting React devs in the community.
        </p>
      </div>
    )
  }
}

const Counter = ({ isFetching, count }) =>
  <strong>
    { isFetching ? 'Still counting' : count }
  </strong>
