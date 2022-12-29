import React from "react";
import Nav from "../components/Nav";
import StyledH1 from "../components/styles/StyledH1";
import Button from "../components/uiKit/Button";
import Img from "../components/uiKit/Img";

const HomePage = () => (
  <>
    <Nav />
    <StyledH1 text="Welcome to SmarTicket" />
    <Img src="" alt="this is the photo alt" />
    <br />
    <Button text="So what are we doing?" />
  </>
);
export default HomePage;
