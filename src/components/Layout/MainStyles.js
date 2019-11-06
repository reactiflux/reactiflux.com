import { createGlobalStyle } from 'styled-components'

export const MainStyles = createGlobalStyle`
html {
    /* set 1rem to 10px at 1000px wide */
    font-size: 62.5%;
    font-size: calc(62.5% - 3px + 0.3vw);
    min-width: 320px;
    overflow-x: hidden;
    overflow-y: scroll;
}

body {
    font-family: Work Sans, sans-serif;
    font-size: 1.9rem;

    img {
        vertical-align: bottom;
    }

    menu, nav {
        &, ul, ol {
            margin: 0;
            padding: 0;
        }
    }

    ul {
        list-style: disc;
    }

    ol {
        list-style: decimal;
    }

    ul, ol {
        padding-left: 3rem;

        li {
            margin-bottom: 1rem;
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
        color: #02d8ff;
        font-family: 'Space Mono', monospace;
        font-size: 7.6rem;
        letter-spacing: -4px;
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

    hr {
        background: hsla(0, 0%, 0%, 0.2);
        height: 1px;
        margin: 2rem 0;
    }
}
`
