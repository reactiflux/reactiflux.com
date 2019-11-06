import React from 'react'

import { Discord, Github, Twitter } from '@assets/logos'
import { Link } from '@components'

import { Footer as FooterElement } from './FooterStyles'

const year = new Date().getFullYear()

export function Footer() {
	return (
		<FooterElement>
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
			<p>© {year} Reactiflux</p>
		</FooterElement>
	)
}
