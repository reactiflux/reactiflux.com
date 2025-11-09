import { createGlobalStyle } from "styled-components";

import { background, blue, foreground, pink } from "@utils/theme";

export const MainStyles = createGlobalStyle`
html {
  /* set 1rem to 10px at 1000px wide */
  font-size: 62.5%;
  font-size: calc(62.5% - 3px + 0.3vw);
  min-width: 320px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.fonts-fallback {
  font-family: Arial !important;
    letter-spacing: 0.125rem;
    word-spacing: -0.1875rem;
    line-height: 1.175;
}
.fonts-fallback strong {
  letter-spacing: 0rem;
}
.fonts-fallback h1 {
  font-family: monospace !important;
  letter-spacing: -0.25rem;
  word-spacing: 0px;
}

html body {
  background: ${background};
  color: ${foreground};
  font-family: Work Sans, Arial, sans-serif;
  font-feature-settings: "kern", "liga", "clig", "calt";
  font-size: 1.9rem;

  ${(props) =>
    props.theme.mobilePadding && `margin-bottom: ${props.theme.mobilePadding};`}

  img {
    vertical-align: bottom;
  }

  menu, nav {
    &, ul, ol {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 2rem;
      }
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  ul, ol {
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    li {
      margin-bottom: 0.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1;
    text-rendering: optimizeLegibility;
  }

  article, p, ol, ul {
    & + h1, & + h2, & + h3, & + h4, & + h5, & + h6 {
      margin-top: 4rem;
    }
  }

  h1 {
    color: ${blue};
    font-family: 'Space Mono', monospace;
    font-size: 7.6rem;
    letter-spacing: -0.4rem;
    position: relative;

    span {
      color: ${pink};
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: uppercase;
    }
  }

  h2 {
    font-size: 3.4rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4, h5, h6 {
    font-size: 1.9rem;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin-bottom: 2rem;
  }

  ul,ol ul,ol {
    margin-bottom: 0rem;
  }

  hr {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
    margin: 2rem 0;
  }


  a {
    text-decoration: none;
    color: ${pink};

    &:hover {
      text-decoration: underline;
    }
  }

  summary::before {
    margin-right: 0.5rem;
  }
}
`;
