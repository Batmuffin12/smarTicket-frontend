import styled from "styled-components";
import A from "../uiKit/A.js";

const StyledA = styled(A)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.mainHover};
  }
`;

export default StyledA;
