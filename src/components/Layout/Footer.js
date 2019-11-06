import React from 'react'

import { Discord, Github, Twitter } from '@assets/logos'

export function Footer() {
	return (
		<footer>
			<p>
				<a
					href="https://github.com/reactiflux/reactiflux.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Github} alt="Github" />
				</a>
				<a
					href="https://discord.gg/reactiflux"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Discord} alt="Discord" />
				</a>
				<a
					href="https://twitter.com/reactiflux"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Twitter} alt="Twitter" />
				</a>
			</p>
			<p>© 2019 Reactiflux</p>
			<p>
				Designed in Sketch. Coded in Atom. Built using Gatsby.js. Hosted
				on Netlify.
			</p>
		</footer>
	)
}
