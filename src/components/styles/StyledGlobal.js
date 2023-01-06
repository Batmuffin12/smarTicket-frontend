import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.mainFont};
  scroll-behavior: smooth;
  }    

  body {
    height: 100%;
    margin: 0;
    background:linear-gradient(${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.main});
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
