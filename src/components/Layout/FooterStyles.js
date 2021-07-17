import styled from "styled-components";

import { foreground } from "@utils/theme";

import { mainPadding } from "./LayoutStyles";

export const Footer = styled.footer`
  ${mainPadding}

  color: ${foreground};
  font-size: 1.2rem;
  text-align: center;

  p.social {
    display: flex;
    justify-content: center;
    margin: 1rem;

    a {
      align-content: center;
      display: flex;
      padding: 6px;
      margin: 0 6px;
    }
  }

  span {
    padding: 0 1.2rem;
  }
`;
