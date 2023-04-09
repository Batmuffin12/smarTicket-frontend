import React from "react";
import styled from "styled-components";
import StepWrapper from "./styles/StepWrapper";
import StyledH1 from "./styles/StyledH1";
import StyledP from "./styles/StyledP";

const ExplainFirstSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: auto;
`;

const ExplainFirstSection = () => (
  <ExplainFirstSectionWrapper>
    <StepWrapper>
      <StyledH1>Create an account</StyledH1>
      <StyledP opacity={0.7}>
        to get on the train fast you'll need an account in our application.
      </StyledP>
    </StepWrapper>
    <StepWrapper>
      <StyledH1>Add an image of your face</StyledH1>
      <StyledP opacity={0.7}>
        we will run our face recognition and now we can identify you at the
        train stations.
      </StyledP>
    </StepWrapper>
  </ExplainFirstSectionWrapper>
);

export default ExplainFirstSection;
