import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  /* background-color: ${({ theme }) => theme.colors.background}; */
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  /* font-family: ${({ theme }) => theme.fonts.BoldFont}; */
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  transition: all 1s ease-in-out;
  /* border-radius: ${({ theme }) => theme.textSizes.smallSize}; */
  padding: ${({ theme }) => theme.textSizes.smallSize};
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  :hover {
    /* background-color: ${({ theme }) => theme.colors.mainHover}; */
    color: ${({ theme }) => theme.colors.mainHover};
    /* transform: scale(1.1); */
  }
`;

export default StyledNavLink;
