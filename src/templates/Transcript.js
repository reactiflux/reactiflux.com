import React from "react";
import { graphql, Link } from "gatsby";

import { FocusBoundary, Layout } from "@components";

export default function Transcript({ data }) {
  const { html, frontmatter } = data.markdownRemark;
  const articles = data.transcripts.nodes
    .filter((node) => node.childMarkdownRemark.html.trim().length)
    .map((node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      path: node.name,
      html: node.childMarkdownRemark.html,
    }));

  return (
    <Layout as="article" title={frontmatter.title} sidebar>
      {(setSidebar) => (
        <>
          <h1>{frontmatter.title}</h1>
          <FocusBoundary onChange={setSidebar}>
            <nav>
              <ol>
                {articles.map((article) => (
                  <li key={article.path}>
                    <Link
                      to={"/transcripts/" + article.path}
                      title={article.title}
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </FocusBoundary>
          <div>
            <p>
              <em>Transcript from {frontmatter.date}</em>
            </p>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query TranscriptQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "dddd MMMM Do, YYYY")
      }
    }
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
