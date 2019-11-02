import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  Container,
  SmallTitle,
  SideBar,
  Transcript,
  StyledLink
} from "../utils/components";
import NavBar from "../utils/components/NavBar";
import Footer from "../utils/components/Footer";

export default function Transcripts({ data }) {
  const articles = data.transcripts.nodes.map(node => {
    return {
      title: node.childMarkdownRemark.frontmatter.title,
      path: `/${node.relativeDirectory}/${node.name}`,
      html: node.childMarkdownRemark.html
    };
  });

  const newestArticle = articles[0];

  return (
    <Container>
      <NavBar />
      <Helmet title={"Reactiflux transcripts"} />
      <SmallTitle>{newestArticle.title}</SmallTitle>
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
      <Transcript article={newestArticle} />
      <Footer />
    </Container>
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
