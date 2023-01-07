import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  transition: all 1s ease-in-out;
  padding: ${({ theme }) => theme.textSizes.smallSize};
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.mainHover};
    transform: scale(1.1);
  }
`;

export default StyledNavLink;
