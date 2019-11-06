import React from 'react'
import styled from 'styled-components'

import { Footer } from './Footer'
import { MainStyles } from './MainStyles'
import { MarkdownStyles } from './MarkdownStyles'
import { Menu } from './Menu'
import { SEO } from './SEO'

import 'minireset.css'
import 'typeface-poppins'
import 'typeface-work-sans'
import 'typeface-space-mono'

const Main = styled.main`
	padding: 10px;

	@media (min-width: 1200px) {
		padding: 10px calc(10px + ((100vw - 1200px) / 2));
	}

	@media (min-width: 820px) {
		display: ${props => (props.homepage ? 'block' : 'grid')};
		grid-template-columns: 1fr 2fr;

		> * {
			grid-column: 2;
			grid-row: 2;
		}

		> :not(nav):last-child {
			transform: translateX(-25%);
		}

		> h1:first-child {
			grid-column: 1 / span 2;
			grid-row: 1;
		}

		> nav {
			grid-column: 1;
			grid-row: 2;
		}
	}
`

export function Layout({ as, children, title, description, ...props }) {
	return (
		<>
			<MainStyles />
			<MarkdownStyles />
			<Menu />
			<Main as={as} {...props}>
				<SEO title={title} description={description} />
				{children}
			</Main>
			<Footer />
		</>
	)
}
