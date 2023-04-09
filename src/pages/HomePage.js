import StyledButton from "components/styles/StyledButton";
import StyledH1 from "components/styles/StyledH1";
import StyledImg from "components/styles/StyledImg";
import StyledP from "components/styles/StyledP";
import styled from "styled-components";
import logo from "../manTakingTrain.png";
import { useNavigate } from "react-router-dom";
import paths from "appConstants/paths";
import HomePageText from "components/HomePageText";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const TextWrapper = styled.div`
  margin: 0 10px;
  min-width: 300px;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 10px;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const toExplainPageHandler = () => navigate(paths.explainPage);

  return (
    <HomePageWrapper>
      <br />
      <StyledH1> Welcome to SmarTicket</StyledH1>
      <MainWrapper>
        <ContentWrapper>
          <TextWrapper>
            <HomePageText />
          </TextWrapper>
          <StyledImg
            src={logo}
            alt="this is the photo alt"
            size="largeImgScale"
          />
        </ContentWrapper>
        <ButtonWrapper>
          <StyledButton onClick={toExplainPageHandler}>
            So what are we doing?
          </StyledButton>
        </ButtonWrapper>
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
