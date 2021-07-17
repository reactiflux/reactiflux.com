import styled, { css } from "styled-components";

import { background, darkPink, pink } from "@utils/theme";

import { Link } from "./Link";

const solid = css`
  background: ${pink};
  color: ${background};
`;

const transparent = css`
  background: ${background};
  color: ${pink};
`;

export const Button = styled.button`
  border: 3px solid ${pink};
  border-radius: 50px;
  cursor: pointer;
  font-size: 2rem;
  line-height: 5rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 0 4rem;
  text-decoration: none;

  ${(props) => (props.secondary ? transparent : solid)}

  &:hover {
    background: ${darkPink};
    border-color: ${darkPink};
    color: ${background};
    text-decoration: none;
  }
`;

export const ButtonLink = Button.withComponent(Link);
