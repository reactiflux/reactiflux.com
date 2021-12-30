import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { foreground, pink } from "@utils/theme";

const StyledLink = styled.a`
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

export function ArticleLink({ title, description, slug }) {
  return (
    <Link passHref href={`/blog/post/${slug}`}>
      <StyledLink>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </StyledLink>
    </Link>
  );
}
