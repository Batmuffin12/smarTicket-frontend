import React from "react";
import StyledHr from "../styles/StyledHr";
import StyledImg from "../styles/StyledImg";
import StyledP from "../styles/StyledP";
import logo from "../../smarticket logo.png";
import styled from "styled-components";

const style = {
  float: "left",
  display: "inline - block",
};

const FooterWrapper = styled.div`
  height: ${({ theme }) => theme.sizes.footerHeight};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const Footer = () => (
  <FooterWrapper>
    <StyledHr marginCss="0 0 10px 0" />
    <ContentWrapper>
      <StyledImg src={logo} size="smallImgScale" style={style} />
      <StyledP>this is a page by SmarTicket</StyledP>
    </ContentWrapper>
  </FooterWrapper>
);

export default Footer;
