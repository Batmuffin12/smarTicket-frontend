import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <NavLink to="/" exact={true}>
        Home Page
      </NavLink>
      <NavLink to="/explainPage">Explanation Page</NavLink>
      <NavLink to="/contactUs">Contact Us</NavLink>
      <NavLink to="/buyTicket">Buy a Ticket</NavLink>
      <NavLink to="/login">Login / signUp</NavLink>
    </header>
  );
};
export default Nav;
