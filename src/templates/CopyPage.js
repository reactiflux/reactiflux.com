import React from "react";
import { graphql } from "gatsby";

import { FocusBoundary, Layout, Link } from "@components";
import { getAnchor } from "@utils/anchor";

export default function Transcript({ data }) {
  const { html, frontmatter, headings } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title} sidebar={frontmatter.sidebar}>
      {(setSidebar) => (
        <>
          <h1>{frontmatter.title}</h1>
          {frontmatter.sidebar ? (
            <FocusBoundary onChange={setSidebar}>
              <nav>
                <ol>
                  {headings
                    .filter((heading) => heading.depth < 3)
                    .map(({ value }) => (
                      <li key={value}>
                        <Link
                          to={getAnchor(value)}
                          onClick={() => {
                            setSidebar(false);
                            document
                              .getElementById(getAnchor(value).replace("#", ""))
                              .querySelector("a")
                              .focus();
                          }}
                        >
                          {value}
                        </Link>
                      </li>
                    ))}
                </ol>
              </nav>
            </FocusBoundary>
          ) : null}
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </>
      )}
    </Layout>
  );
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
`;
