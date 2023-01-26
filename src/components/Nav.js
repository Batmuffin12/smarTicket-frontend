import StyledHeader from "components/styles/StyledHeader";
import NavLinkTag from "components/uiKit/NavLink";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DropdownNavLink from "./DropdownNavLink";

const selectors = (state) => ({
  currentUser: state.currentUser.data,
});

const Nav = () => {
  const { currentUser } = useSelector(selectors);
  const [isAdmin, setIsAdmin] = useState(false);
  const showLogin = !currentUser?.data;
  const adminLinks = [
    {
      text: "Users",
      to: "/admin/users",
    },
    {
      text: "Trains",
      to: "/admin/trains",
    },
    {
      text: "Stations",
      to: "/admin/stations",
    },
    {
      text: "Tickets",
      to: "/admin/tickets",
    },
    {
      text: "Trips",
      to: "/admin/trips",
    },
  ];
  const firstItem = {
    text: "Admin",
    to: "#",
  };
  useEffect(() => {
    setIsAdmin(currentUser?.data?.isAdmin);
  }, [currentUser]);

  return (
    <StyledHeader>
      <NavLinkTag to="/" exact="true" text="Home Page" />
      <NavLinkTag to="/contactUs" text="Contact Us" />
      <NavLinkTag to="/viewTrains" text="Buy a Ticket" />
      {showLogin && <NavLinkTag to="/login" text="Login / signUp" />}
      {isAdmin && <DropdownNavLink firstItem={firstItem} items={adminLinks} />}
    </StyledHeader>
  );
};

export default Nav;
