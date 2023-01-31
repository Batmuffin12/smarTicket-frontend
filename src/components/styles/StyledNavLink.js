import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  height: 100%;
  min-height: ${({ theme }) => theme.sizes.headerHeight};
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  margin: 0 ${({ theme }) => theme.textSizes.smallSize};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.colors.mainHover};
    transform: scale(1.1);
  }
`;

export const StyledNavButton = styled.button`
  height: 100%;
  min-height: ${({ theme }) => theme.sizes.headerHeight};
  font-size: ${({ theme }) => theme.textSizes.smallSize};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  margin: 0 ${({ theme }) => theme.textSizes.smallSize};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.colors.mainHover};
    transform: scale(1.1);
  }
`;
