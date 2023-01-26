import StyledButton from "components/styles/StyledButton";
import StyledH1 from "components/styles/StyledH1";
import StyledImg from "components/styles/StyledImg";
import StyledLink from "components/styles/StyledLink";
import logo from "../logo512.png";

const HomePage = () => {
  return (
    <>
      <StyledH1 text="Welcome to SmarTicket" />
      <StyledImg src={logo} alt="this is the photo alt" size="mediumImgScale" />
      <br />
      <StyledButton>
        <StyledLink to="/explainPage">So what are we doing?</StyledLink>
      </StyledButton>
    </>
  );
};

export default HomePage;
