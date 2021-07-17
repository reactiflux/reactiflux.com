import React from "react";
import { graphql } from "gatsby";

import { ArticleLink, Layout, Link, Pagination } from "@components";

export default function BlogIndex(props) {
  const { currentPage, pageCount } = props.pageContext;
  const { nodes } = props.data.allFile;

  return (
    <Layout title={`Blog • Page ${currentPage}`}>
      <h1>Reactiflux Blog</h1>
      <div>
        {nodes.map((post) => (
          <ArticleLink key={post.name} {...post} />
        ))}
        {pageCount > 1 ? (
          <Pagination>
            {Array.from({ length: pageCount }, (_, i) => {
              const page = i + 1;
              return (
                <li key={page}>
                  <Link to={`/blog/${page > 1 ? page : ""}`}>{page}</Link>
                </li>
              );
            })}
          </Pagination>
        ) : null}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" }, extension: { in: ["md"] } }
      sort: { order: DESC, fields: [childMarkdownRemark___frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        name
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
