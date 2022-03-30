import { createGlobalStyle } from "styled-components";
const background = require("../images/background.jpg")

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Marcellus SC', sans-serif;
        background: url(${background}) center no-repeat;
    }
    `
;

export default GlobalStyle