import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
    overflow-x: hidden;
    }
    
    img {
        border-radius: 50%;
        border: 2px solid #dddddd;
    }

    p {
        font-size: 20px;
        font-weight: lighter;
        line-height: 30px;
        letter-spacing: 1.2px;
    }
`


export default GlobalStyle;