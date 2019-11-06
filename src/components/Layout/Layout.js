import React from 'react'

import { Footer } from './Footer'
import { Main } from './LayoutStyles'
import { MainStyles } from './MainStyles'
import { MarkdownStyles } from './MarkdownStyles'
import { Menu } from './Menu'
import { SEO } from './SEO'

import 'minireset.css'
import 'typeface-poppins'
import 'typeface-work-sans'
import 'typeface-space-mono'

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
