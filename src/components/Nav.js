import paths from "appConstants/paths";
import StyledHeader from "components/styles/StyledHeader";
import NavLinkTag from "components/uiKit/NavLink";
import { useActions } from "hooks/useAction";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import DropdownNavLink from "./DropdownNavLink";
import StyledButton from "./styles/StyledButton";

const selectors = (state) => ({
  currentUser: state.currentUser?.data,
});
const componentActions = {
  signOut: actions.signOut,
};

const Nav = () => {
  const { currentUser } = useSelector(selectors);
  const { signOut } = useActions(componentActions);
  const [isAdmin, setIsAdmin] = useState(false);
  const showLogin = !currentUser?.data;
  const adminLinks = [
    {
      text: "Users",
      to: paths.adminPages.users,
    },
    {
      text: "Trains",
      to: paths.adminPages.trains,
    },
    {
      text: "Stations",
      to: paths.adminPages.stations,
    },
    {
      text: "Tickets",
      to: paths.adminPages.tickets,
    },
    {
      text: "Trips",
      to: paths.adminPages.trips,
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
    <>
      <StyledHeader>
        <NavLinkTag to={paths.homePage} exact="true" text="Home Page" />
        <NavLinkTag to={paths.contactUsPage} text="Contact Us" />
        <NavLinkTag to={paths.viewTrainsPage} text="Buy a Ticket" />
        {showLogin && <NavLinkTag to={paths.loginPage} text="Login / signUp" />}
        {isAdmin && (
          <DropdownNavLink firstItem={firstItem} items={adminLinks} />
        )}
        {!showLogin && (
          <StyledButton
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </StyledButton>
        )}
      </StyledHeader>
    </>
  );
};

export default Nav;
