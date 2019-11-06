import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { getAnchor } from '../utils/anchor'

export default function Transcript({ data }) {
	const { html, frontmatter, headings } = data.markdownRemark

	return (
		<main>
			<Helmet title={'Reactiflux transcripts'} />
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
									<a href={getAnchor(value)}>{value}</a>
								</li>
							))}
					</ol>
				</nav>
			) : null}
		</main>
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
