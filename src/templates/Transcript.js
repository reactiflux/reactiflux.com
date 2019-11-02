import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  Container,
  SmallTitle,
  SideBar,
  StyledLink
} from "../utils/components";

// Add our typefaces.
import "typeface-poppins";
import "typeface-work-sans";
import "typeface-space-mono";

import Layout from "../utils/components/Layout";

export default function Transcript({ data }) {
  console.log(data);
  const { html, frontmatter } = data.markdownRemark;
  const articles = data.transcripts.nodes.map(node => {
    return {
      title: node.childMarkdownRemark.frontmatter.title,
      path: `/${node.relativeDirectory}/${node.name}`,
      html: node.childMarkdownRemark.html
    };
  });

  const newestArticle = articles[0];
  return (
    <Layout>
      <Container>
        <Helmet title={"Reactiflux transcripts"} />
        <SmallTitle>{frontmatter.title}</SmallTitle>
        <SideBar>
          {articles.map(article => (
            <li key={article.title}>
              <StyledLink
                to={"/transcripts/" + article.path}
                title={article.title}
              >
                {article.title}
              </StyledLink>
            </li>
          ))}
        </SideBar>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TranscriptQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allFile(
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
