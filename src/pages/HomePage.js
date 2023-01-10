import React from "react";
import Nav from "../components/Nav";
import StyledA from "../components/styles/StyledA";
import StyledButton from "../components/styles/StyledButton";
import StyledFooter from "../components/styles/StyledFooter";
import StyledH1 from "../components/styles/StyledH1";
import StyledImg from "../components/styles/StyledImg";
import logo from "../logo512.png";

const HomePage = () => {
  return (
    <>
      <Nav />
      <StyledH1 text="Welcome to SmarTicket" />
      <StyledImg src={logo} alt="this is the photo alt" size="mediumImgScale" />
      <br />
      <StyledButton>
        <StyledA href={"/explainPage"}>So what are we doing?</StyledA>
      </StyledButton>
      <StyledFooter />
    </>
  );
};

export default HomePage;
