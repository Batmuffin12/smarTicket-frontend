import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin: 0px;
  font-family: ${({ theme }) => theme.fonts.boldFont};
  text-align: center;
`;

export default StyledH1;
