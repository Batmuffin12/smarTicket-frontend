import React from "react";
import styled from "styled-components";
import ExplainSecondSection from "components/ExplainSecondSection";
import StyledButton from "components/styles/StyledButton";
import ExplainFirstSection from "components/ExplainFirstSection";
import StyledH1 from "components/styles/StyledH1";
import { useNavigate } from "react-router-dom";
import ExplainThirdSection from "components/ExplainThirdSection";
import paths from "appConstants/paths";
import actions from "store/actions";
import { useActions } from "hooks/useAction";

const ExplainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ExplainPageMainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const TitleWrapper = styled.div`
  margin-top: 10px;
`;

const componentActions = {
  setPopUpState: actions.setPopUpState,
};

const ExplainPage = () => {
  const navigate = useNavigate();
  const { setPopUpState } = useActions(componentActions);

  const acceptHandler = () => {
    setPopUpState({
      text: "Here you can sign up for my program",
      open: true,
      success: true,
    });
    navigate(paths.signUpPage);
  };

  const denyHandler = () => {
    setPopUpState({
      text: "Here you can contact us and tell us why",
      open: true,
      success: true,
    });
    navigate(paths.contactUsPage);
  };

  return (
    <ExplainPageWrapper>
      <TitleWrapper>
        <StyledH1>How is this program works?</StyledH1>
      </TitleWrapper>
      <ExplainPageMainWrapper>
        <ExplainFirstSection />
        <ExplainSecondSection />
        <ExplainThirdSection />
      </ExplainPageMainWrapper>
      <ButtonWrapper>
        <StyledH1> will you use my program?</StyledH1>
        <StyledButton onClick={acceptHandler}>Yes</StyledButton>
        <StyledButton onClick={denyHandler}>No</StyledButton>
      </ButtonWrapper>
    </ExplainPageWrapper>
  );
};

export default ExplainPage;
