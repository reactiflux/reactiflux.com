import styled from "styled-components";

import { background, pink } from "@utils/theme";

export const Pagination = styled.ol`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: block;
    line-height: 3rem;
    margin: 0 0.5rem;
    padding: 0 1rem;

    &[aria-current="page"],
    :hover,
    :focus {
      background: ${pink};
      border-radius: 3px;
      color: ${background};
      text-decoration: none;
    }
  }
`;
