import React from 'react'

import { Discord, Github, Twitter } from '@assets/logos'
import { Link } from '@components'

export function Footer() {
	return (
		<footer>
			<p>
				<Link to="https://github.com/reactiflux/reactiflux.com">
					<img src={Github} alt="Github" />
				</Link>
				<Link to="https://discord.gg/reactiflux">
					<img src={Discord} alt="Discord" />
				</Link>
				<Link to="https://twitter.com/reactiflux">
					<img src={Twitter} alt="Twitter" />
				</Link>
			</p>
			<p>© 2019 Reactiflux</p>
			<p>
				Designed in <Link to="https://www.sketchapp.com/">Sketch</Link>.
				Coded in <Link to="https://code.visualstudio.com/">VSCode</Link>
				. Built using{' '}
				<Link to="https://github.com/gatsbyjs/gatsby">Gatsby.js</Link>.
				Hosted on <Link to="https://www.netlify.com/">Netlify</Link>.
			</p>
		</footer>
	)
}
