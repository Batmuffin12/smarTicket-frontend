import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }
  html {
    font-family: ${({ theme }) => theme.fonts.mainFont};
  scroll-behavior: smooth;
}    
`;

export default GlobalStyle;
