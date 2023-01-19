import StyledHr from "components/styles/StyledHr";
import StyledImg from "components/styles/StyledImg";
import StyledP from "components/styles/StyledP";
import styled from "styled-components";
import logo from "../../smarticket logo.png";

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
