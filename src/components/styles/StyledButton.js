import styled from "styled-components";
import Button from "../uiKit/Button";

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  background-image: -webkit-linear-gradient(
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
    color: ${({ theme }) => theme.colors.mainHover};
    opacity: 1;
  }
`;

export default StyledButton;
