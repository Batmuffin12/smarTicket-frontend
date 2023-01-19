import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.mainHover};
  }
`;

export default StyledLink;
