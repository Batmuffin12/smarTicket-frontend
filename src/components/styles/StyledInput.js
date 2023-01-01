import styled from "styled-components";
import Input from "../uiKit/Input";

const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  size: ${({ size, theme }) => {
    if (size === "small") return theme.sizes.smallInput;
    if (size === "medium") return theme.sizes.mediumInput;
    if (size === "large") return theme.sizes.largeInput;
  }};
`;

export default StyledInput;
