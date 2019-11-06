import React from 'react'
import { Link } from 'gatsby'

import {
	Community,
	Console,
	Facebook,
	GraphQL,
	Jest,
	ReactNative,
	ReactLogo,
	Redux,
	Relay,
} from '@assets/logos'
import { Layout } from '@components'

const Index = () => {
	return (
		<Layout title="Welcome" homepage>
			<h1>Welcome to Reactiflux</h1>
			<p>
				We&rsquo;re a chat community of 80,000+ React&nbsp;JS&nbsp;
				<a
					href="https://github.com/facebook/react"
					rel="noopener noreferrer"
					target="_blank"
					title="React JS"
				>
					<img src={ReactLogo} alt="React JS" />
				</a>
				, React&nbsp;Native&nbsp;
				<a
					href="https://github.com/facebook/react-native"
					rel="noopener noreferrer"
					target="_blank"
					title="React Native"
				>
					<img src={ReactNative} alt="React Native" />
				</a>
				, Redux&nbsp;
				<a
					href="https://github.com/reactjs/redux"
					rel="noopener noreferrer"
					target="_blank"
					title="Redux"
				>
					<img src={Redux} alt="Redux" />
				</a>
				, Jest&nbsp;
				<a
					href="https://github.com/facebook/jest"
					rel="noopener noreferrer"
					target="_blank"
					title="Jest"
				>
					<img src={Jest} alt="Jest" />
				</a>
				, Relay&nbsp;
				<a
					href="https://github.com/facebook/relay"
					rel="noopener noreferrer"
					target="_blank"
					title="Relay"
				>
					<img src={Relay} alt="Relay" />
				</a>{' '}
				and GraphQL&nbsp;
				<a
					href="https://github.com/facebook/graphql"
					rel="noopener noreferrer"
					target="_blank"
					title="GraphQL"
				>
					<img src={GraphQL} alt="GraphQL" />
				</a>{' '}
				developers. We hold Q&amp;A&rsquo;s with Facebook
				Engineers&nbsp;
				<a
					href="https://github.com/facebook"
					rel="noopener noreferrer"
					target="_blank"
					title="Facebook Organization"
				>
					<img src={Facebook} alt="Facebook Organization" />
				</a>{' '}
				and other developers&nbsp;
				<a
					href="https://github.com/reactiflux"
					rel="noopener noreferrer"
					target="_blank"
					title="Reactiflux Developers"
				>
					<img src={Console} alt="Reactiflux Developers" />
				</a>{' '}
				in the community&nbsp;
				<a
					href="https://discord.gg/reactiflux"
					rel="noopener noreferrer"
					target="_blank"
					title="Reactiflux Discord"
				>
					<img src={Community} alt="Reactiflux Discord" />
				</a>
				. Come chat about tech related to React & JavaScript or ask for
				help!
			</p>
			<p>
				<a
					href="https://discord.gg/reactiflux"
					rel="noopener noreferrer"
					target="_blank"
					title="Reactiflux Discord"
				>
					Join Reactiflux
				</a>
				<Link to="/schedule/" title="Q&A Schedule">
					Q&A Schedule
				</Link>
			</p>
		</Layout>
	)
}

export default Index
