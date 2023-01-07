import React from "react";
import Nav from "../components/Nav";
import StyledButton from "../components/styles/StyledButton";
import StyledFooter from "../components/styles/StyledFooter";
import StyledH1 from "../components/styles/StyledH1";
import StyledImg from "../components/styles/StyledImg";
import logo from "../logo512.png";

const HomePage = () => (
  <>
    <Nav />
    <StyledH1 text="Welcome to SmarTicket" />
    <StyledImg src={logo} alt="this is the photo alt" />
    <br />
    <StyledButton>So what are we doing?</StyledButton>
    <StyledFooter />
  </>
);

export default HomePage;
