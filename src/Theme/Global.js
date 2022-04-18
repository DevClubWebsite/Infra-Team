import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        font-size: 18px;
    }

    html {
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

`;

export default GlobalStyles;
