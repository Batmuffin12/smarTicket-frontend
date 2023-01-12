import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%; 
    font-family: ${({ theme }) => theme.fonts.mainFont};
    scroll-behavior: smooth;
  }    

  body {
    margin: 0;
    background-image: 
    -webkit-linear-gradient(bottom,
    ${({ theme }) => theme.colors.main},  
    ${({ theme }) => theme.colors.background});
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
