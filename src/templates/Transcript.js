import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import {
  Container,
  MarkdownContainer,
  SmallTitle,
  SideBar,
  StyledLink,
} from '../utils/components';
import MarkdownStyles from '../css/markdown-styles';

// Add our typefaces.
import 'typeface-poppins';
import 'typeface-work-sans';
import 'typeface-space-mono';

import Layout from '../utils/components/Layout';

export default function Transcript({ data }) {
  const { html, frontmatter } = data.markdownRemark;
  const articles = data.transcripts.nodes
    .filter((node) => node.childMarkdownRemark.html.trim().length)
    .map((node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      path: `/${node.relativeDirectory}/${node.name}`,
      html: node.childMarkdownRemark.html,
    }));

  return (
    <Layout>
      <Container>
        <MarkdownStyles />
        <Helmet title={'Reactiflux transcripts'} />
        <SmallTitle>{frontmatter.title}</SmallTitle>
        <SideBar>
          {articles.map((article) => (
            <li key={article.title}>
              <StyledLink
                to={'/transcripts/' + article.path}
                title={article.title}
              >
                {article.title}
              </StyledLink>
            </li>
          ))}
        </SideBar>
        <MarkdownContainer
          className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
