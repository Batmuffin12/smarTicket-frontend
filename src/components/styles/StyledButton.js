import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: ${({ theme }) => theme.textSizes.smallSize};
  font-family: ${({ theme }) => theme.fonts.boldFont};
`;

export default StyledButton;
