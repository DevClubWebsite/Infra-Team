import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }     

    button {
        border:none;
    }
`;

export default GlobalStyles;
