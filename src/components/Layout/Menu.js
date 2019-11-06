import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'gatsby'

import { Reactiflux } from '@assets/logos'
import { useIsMobile } from '@hooks'

import { Logo, MobileNav, Space, Wrapper } from './MenuStyles'

const RenderChildren = ({ children }) => children

export function Menu() {
	const isMobile = useIsMobile()

	const HeadroomIfDesktop = isMobile ? RenderChildren : Headroom
	const MobileNavIfMobile = isMobile ? MobileNav : RenderChildren

	return (
		<HeadroomIfDesktop>
			<Wrapper>
				<Link to="/">
					<Logo src={Reactiflux} alt="Reactiflux" />
				</Link>
				<Space />
				<MobileNavIfMobile>
					<Link to="/tips/">Tips</Link>
					<Link to="/guidelines/">Guidelines</Link>
					<Link to="/schedule/">Q&A Schedule</Link>
					<Link to="/transcripts/">Transcripts</Link>
					<a
						href="http://jobs.reactiflux.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jobs
					</a>
					<Link to="/learning/">Learning</Link>
				</MobileNavIfMobile>
			</Wrapper>
		</HeadroomIfDesktop>
	)
}
