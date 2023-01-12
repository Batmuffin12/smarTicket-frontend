import React from "react";
import StyledHeader from "./styles/StyledHeader";
import NavLinkTag from "./uiKit/NavLink";

const Nav = () => {
  return (
    <StyledHeader>
      <NavLinkTag to="/" exact="true" text="Home Page" />
      <NavLinkTag to="/contactUs" text="Contact Us" />
      <NavLinkTag to="/viewTrains" text="Buy a Ticket" />
      <NavLinkTag to="/login" text="Login / signUp" />
    </StyledHeader>
  );
};

export default Nav;
