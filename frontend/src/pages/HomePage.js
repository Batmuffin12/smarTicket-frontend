import React from "react";
import Nav from "../components/Nav";
import H1 from "../tags/H1";
import Img from "../tags/img";
import Button from "../tags/button";

const HomePage = () => (
  <>
    <Nav />
    <H1 text="Welcome to SmarTicket" />
    <Img src="" alt="this is the photo alt" />
    <br />
    <Button text="So what are we doing?" />
  </>
);
export default HomePage;
