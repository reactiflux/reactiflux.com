import { createGlobalStyle } from 'styled-components';

import { foreground, pink } from '@utils/theme';

export const MarkdownStyles = createGlobalStyle`
.markdown {
  h1 {
    color: ${foreground};
    font-family: 'Space Mono', monospace;
    font-size: 5rem;
    letter-spacing: -0.3rem;
    line-height: 1.1;
  }
  h2,h3,h4 {
    color: ${foreground};
  }
  a {
    text-decoration: none;
    color: ${pink};
    &:hover {
      text-decoration: underline;
    }
  }
  a, code, strong {
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
  }
}

.markdownIt-TOC {
  margin-left: 0;
  list-style: none;
  a {
    color: ${pink};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    margin-top: 0;
    margin-left: 0;
    list-style: none;
    font-size: 1rem;
    line-height: 1rem;
  }
  li {
    line-height: 1.5em;
    margin-bottom: calc(1.5rem / 2);
  }
}
`;
