import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkTag = ({
  to = "",
  exact = "false",
  className = "",
  text = "",
}) => {
  if (to) {
    return (
      <NavLink className={className} to={to} exact={exact}>
        {text}
      </NavLink>
    );
  }
};
export default NavLinkTag;
