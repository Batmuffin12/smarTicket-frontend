import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  /* background-color: ${({ theme }) => theme.colors.secondaryBackground};*/
  background: linear-gradient(
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.secondaryBackground}
  );
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: ${({ theme }) => theme.sizes.largeSize};
  font-family: ${({ theme }) => theme.fonts.boldFont};
  transition: all 0.5s ease-in;
  margin: ${({ theme }) => theme.sizes.itemMargin};
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  opacity: 0.7;
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    /* background-color: ${({ theme }) => theme.colors.background}; */
    color: ${({ theme }) => theme.colors.mainHover};
    opacity: 1;
  }
`;

export default StyledButton;
