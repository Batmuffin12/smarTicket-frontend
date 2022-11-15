import React from "react";
import NavLink from "../tags/NavLink";

const Nav = () => {
  return (
    <header>
      <NavLink to="/" exact="true" text="Home Page" />
      <NavLink to="/explainPage" text="Explanation Page" />
      <NavLink to="/contactUs" text="Contact Us" />
      <NavLink to="/buyTicket" text="Buy a Ticket" />
      <NavLink to="/login" text="Login / signUp" />
    </header>
  );
};
export default Nav;
