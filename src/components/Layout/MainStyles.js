import { createGlobalStyle } from 'styled-components'

export const MainStyles = createGlobalStyle`
html {
    overflow-x: hidden;
    overflow-y: scroll;
}

body {
    font-family: Work Sans, sans-serif;
}

img {
    vertical-align: bottom;
}

menu, nav {
    &, ul, ol {
        margin: 0;
        padding: 0;
    }
}
`
