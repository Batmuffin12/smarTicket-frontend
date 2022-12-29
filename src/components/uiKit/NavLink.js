import React from "react";
import StyledNavLink from "../styles/StyledNavLink";

const NavLinkTag = ({ to = "", exact = "false", text = "", ...rest }) => {
  return (
    <StyledNavLink to={to} exact={exact} {...rest}>
      {text}
    </StyledNavLink>
  );
};

export default NavLinkTag;
