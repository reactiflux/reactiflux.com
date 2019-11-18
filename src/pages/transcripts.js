import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Link } from '@components';

export default function Transcripts({ data }) {
  const articles = data.transcripts.nodes
    .filter((node) => node.childMarkdownRemark.html.trim().length)
    .map((node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      path: `/${node.relativeDirectory}/${node.name}`,
      html: node.childMarkdownRemark.html,
    }));

  const newestArticle = articles[0];

  return (
    <Layout title="Transcripts" sidebar>
      <h1>{newestArticle.title}</h1>
      <div>
        <time>Transcript from {newestArticle.date}</time>
        <div dangerouslySetInnerHTML={{ __html: newestArticle.html }} />
      </div>
      <nav>
        <ol>
          {articles.map((article) => (
            <li key={article.title}>
              <Link to={'/transcripts/' + article.path} title={article.title}>
                {article.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllTranscripts {
    transcripts: allFile(
      filter: { sourceInstanceName: { eq: "transcripts" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
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
`;
