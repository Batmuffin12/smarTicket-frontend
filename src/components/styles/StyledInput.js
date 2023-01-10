import styled from "styled-components";
import Input from "../uiKit/Input";

const StyledInput = styled(Input)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 ${({ theme, size }) => theme.sizes[size]}
    ${({ theme, size }) => theme.sizes[size]} 0;
  height: 40px;
  margin: ${({ theme }) => theme.sizes.itemMargin};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.smallSize};
  border-bottom: 3px solid ${({ theme }) => theme.colors.background};
  outline: 0;
  transition: 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.textSizes.mediumSize};
  text-align: center;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.largeSize};
  }

  :focus {
    ::placeholder {
      transition: 0.3s ease-in-out;
      color: transparent;
    }
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainHover};
  }

  :hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default StyledInput;
