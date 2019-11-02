import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, SmallTitle, MarkdownContainer } from "../utils/components";
import MarkdownStyles from "../css/markdown-styles";

// Add our typefaces.
import "typeface-poppins";
import "typeface-work-sans";
import "typeface-space-mono";

import Layout from "../utils/components/Layout";

export default function Transcript({ data }) {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Container>
        <MarkdownStyles />
        <Helmet title={"Reactiflux transcripts"} />
        <SmallTitle>{frontmatter.title}</SmallTitle>
        <MarkdownContainer
          className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query CopyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
