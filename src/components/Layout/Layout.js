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

const Main = styled.main``

export function Layout({ as, children, title, description }) {
	return (
		<>
			<MainStyles />
			<MarkdownStyles />
			<Menu />
			<Main as={as}>
				<SEO title={title} description={description} />
				{children}
			</Main>
			<Footer />
		</>
	)
}
