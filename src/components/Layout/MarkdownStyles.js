import { createGlobalStyle } from 'styled-components'

export const MarkdownStyles = createGlobalStyle`
.markdown {
  color: #3a1437;
  h1 {
    color: #02d8ff;
    font-size: 8.421052632rem;
    letter-spacing: -13px;
    line-height: 8.421052632rem;
    font-family: 'Space Mono', monospace;

  }
  h2,h3,h4 {
    color: #52244f;
  }
  a {
    text-decoration: none;
    color: #dd1d64;
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
    color: #dd1d64;
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
`
