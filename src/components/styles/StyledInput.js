import styled from "styled-components";
import Input from "../uiKit/Input";

const StyledInput = styled(Input)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 ${({ theme, size }) => theme.sizes[size]}
    ${({ theme, size }) => theme.sizes[size]} 0;
  margin: ${({ theme }) => theme.sizes.itemMargin};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.smallSize};
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  outline: 0;
  transition: 0.3s;
  font-size: ${({ theme }) => theme.textSizes.mediumSize};

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.largeSize};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainHover};
  }
`;

export default StyledInput;
