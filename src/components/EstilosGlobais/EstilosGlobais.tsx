import { createGlobalStyle } from "styled-components";
import PoppinsBold from './Fonts/Poppins-Bold.ttf'
import PoppinsRegular from './Fonts/Poppins-Regular.ttf'



const EstilosGlobais = createGlobalStyle`
    :root {
        --principal-cor-1: #090C40;
        --principal-cor-2: #048ABF;
        --principal-cor-3: #025E73;
        --principal-cor-4: #5ABF4B;
        --principal-cor-5: #F2B705;
        --principal-cor-6: #F5A26B;
        --auxiliar-cor-1: #474966;
        --auxiliar-cor-2: #0a0b0b;
        --auxiliar-cor-3: #426B7F;
        --auxiliar-cor-4: #72A091;
        --auxiliar-cor-5: #E75A55;
        --auxiliar-cor-6: #F54B5D;
        --auxiliar-cor-7: #42816C;
        --grayscale-cor-1: #47485E;
        --grayscale-cor-2: #C5C7D0;
        --grayscale-cor-3: #f3f3f3;
        --grayscale-cor-4: #FCFCFC;
        --black-input: #131212;

        --font-1: PoppinsRegular;
        --font-2: PoppinsBold;
  

    }

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('Poppins Regular'), local('PoppinsRegular'), url(${PoppinsRegular});
    }
    @font-face {
        font-family: 'PoppinsBold';
        src: local('Poppins Bold'), local('PoppinsBold'), url(${PoppinsBold});
    }
    html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: PoppinsRegular;
    }
    body {
    margin: 0;
    min-height: 100vh;
    overflow: hidden;
    }
    main {
    display: flex;
    width: 100dvw;
    overflow: hidden;
    }
    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }
    hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
    }
    a {
    background-color: transparent;
    }
    abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
    }
    b,
    strong {
    font-weight: bolder;
    }
    code,
    kbd,
    samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }
    sub {
    bottom: -0.25em;
    }
    sup {
    top: -0.5em;
    }
    img {
    border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    }
    button,
    input { 
    overflow: visible;
    }
    button,
    select { 
    text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }
    legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
    }
    progress {
    vertical-align: baseline;
    }
    textarea {
    overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
    }
    details {
    display: block;
    }
    summary {
    display: list-item;
    }
    template {
    display: none;
    }
    [hidden] {
    display: none;
    }
`
export default EstilosGlobais