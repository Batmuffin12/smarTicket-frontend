import React from "react";
import StyledHr from "../styles/StyledHr";
import StyledImg from "../styles/StyledImg";
import StyledP from "../styles/StyledP";
import logo from "../../smarticket logo.png";

const style = {
  float: "left",
  display: "inline - block",
};

const Footer = () => (
  <>
    <StyledHr />
    <StyledImg src={logo} size="smallImgScale" style={style} />
    <StyledP>this is a page by SmarTicket</StyledP>
  </>
);

export default Footer;
