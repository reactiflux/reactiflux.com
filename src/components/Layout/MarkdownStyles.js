import { createGlobalStyle } from "styled-components";

import { foreground, pink } from "@utils/theme";

export const MarkdownStyles = createGlobalStyle`
.fonts-fallback .markdown h1 {
  letter-spacing: -0.3rem;
}
.fonts-fallback .markdown {
  letter-spacing: 0.1rem;
  line-height: 1.175;
  // word-spacing: 0.0625rem;
}
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
`;
