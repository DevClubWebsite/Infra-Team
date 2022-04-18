import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
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

    h1 {
        2rem;
    }

    h2 {
        1.5rem;
    }

    h3 {
        1.17rem;
    }
    
    h4 {
        1rem;
    }

    h5 {
        0.83rem;
    }

    h6 {
        0.67rem;
    }
`;

export default GlobalStyles;
