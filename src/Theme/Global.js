import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }

    body {
        background-color: ${Theme.colours.blue.off}
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }     
`

export default GlobalStyles;