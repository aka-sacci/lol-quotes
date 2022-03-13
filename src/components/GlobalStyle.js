import { createGlobalStyle } from "styled-components";
import background from "../images/background.jpg"

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Marcellus SC', sans-serif;
        background: url(${background}) center no-repeat;
        
    }
    `
;