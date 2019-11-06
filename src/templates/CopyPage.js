import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Link } from '@components'
import { getAnchor } from '@utils/anchor'

export default function Transcript({ data }) {
	const { html, frontmatter, headings } = data.markdownRemark

	return (
		<Layout title={frontmatter.title}>
			<h1>{frontmatter.title}</h1>
			<div
				className="markdown"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			{frontmatter.sidebar ? (
				<nav>
					<ol>
						{headings
							.filter(heading => heading.depth < 3)
							.map(({ value }) => (
								<li key={value}>
									<Link to={getAnchor(value)}>{value}</Link>
								</li>
							))}
					</ol>
				</nav>
			) : null}
		</Layout>
	)
}

export const pageQuery = graphql`
	query CopyQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				sidebar
			}
			headings {
				depth
				value
			}
		}
	}
`
