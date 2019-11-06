import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

export default function Transcript({ data }) {
	const { html, frontmatter } = data.markdownRemark
	const articles = data.transcripts.nodes
		.filter(node => node.childMarkdownRemark.html.trim().length)
		.map(node => ({
			title: node.childMarkdownRemark.frontmatter.title,
			path: `/${node.relativeDirectory}/${node.name}`,
			html: node.childMarkdownRemark.html,
		}))

	return (
		<article>
			<Helmet title={'Reactiflux transcripts'} />
			<h1>{frontmatter.title}</h1>
			<div
				className="markdown"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<nav>
				<ol>
					{articles.map(article => (
						<li key={article.title}>
							<Link
								to={'/transcripts/' + article.path}
								title={article.title}
							>
								{article.title}
							</Link>
						</li>
					))}
				</ol>
			</nav>
		</article>
	)
}

export const pageQuery = graphql`
	query TranscriptQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
		transcripts: allFile(
			filter: { sourceInstanceName: { eq: "transcripts" } }
			sort: {
				fields: childMarkdownRemark___frontmatter___date
				order: DESC
			}
		) {
			nodes {
				name
				relativeDirectory
				childMarkdownRemark {
					html
					frontmatter {
						title
					}
				}
			}
		}
	}
`
