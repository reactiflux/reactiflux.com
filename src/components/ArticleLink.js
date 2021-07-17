import React from "react";
import styled from "styled-components";

import { foreground, pink } from "@utils/theme";

import { Link } from "./Link";

const StyledLink = styled(Link)`
  border-left: 3px solid ${pink};
  display: block;
  margin: 2rem 0;
  padding: 2rem;

  :hover {
    text-decoration: none;
  }

  p {
    color: ${foreground};

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export function ArticleLink({ childMarkdownRemark, relativeDirectory, name }) {
  const { title, description } = childMarkdownRemark.frontmatter;

  return (
    <StyledLink to={`/blog/${relativeDirectory}/${name.replace("index", "")}`}>
      <article>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </article>
    </StyledLink>
  );
}
