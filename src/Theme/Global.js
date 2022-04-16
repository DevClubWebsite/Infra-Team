import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,400;1,600&display=swap');

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