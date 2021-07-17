import React from "react";
import { graphql } from "gatsby";

import { FocusBoundary, Layout, Link } from "@components";

export default function Transcripts({ data }) {
  const articles = data.transcripts.nodes
    .filter((node) => node.childMarkdownRemark.html.trim().length)
    .map((node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      path: node.name,
      html: node.childMarkdownRemark.html,
    }));

  const newestArticle = articles[0];

  return (
    <Layout title="Transcripts" sidebar>
      {(setSidebar) => (
        <>
          <h1>{newestArticle.title}</h1>
          <FocusBoundary onChange={setSidebar}>
            <nav>
              <ol>
                {articles.map((article) => (
                  <li key={article.path}>
                    <Link to={"/transcripts/" + article.path}>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </FocusBoundary>
          <div>
            <time>Transcript from {newestArticle.date}</time>
            <div dangerouslySetInnerHTML={{ __html: newestArticle.html }} />
          </div>
        </>
      )}
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
