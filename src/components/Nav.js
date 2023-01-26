import StyledHeader from "components/styles/StyledHeader";
import NavLinkTag from "components/uiKit/NavLink";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const selectors = (state) => ({
  currentUser: state.currentUser.data,
});

const Nav = () => {
  const { currentUser } = useSelector(selectors);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(currentUser?.data?.isAdmin);
  }, [currentUser]);

  return (
    <StyledHeader>
      <NavLinkTag to="/" exact="true" text="Home Page" />
      <NavLinkTag to="/contactUs" text="Contact Us" />
      <NavLinkTag to="/viewTrains" text="Buy a Ticket" />
      <NavLinkTag to="/login" text="Login / signUp" />
      {isAdmin && <NavLinkTag to="/admin" text="Admin Page" />}
    </StyledHeader>
  );
};

export default Nav;
