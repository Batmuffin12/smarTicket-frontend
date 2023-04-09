import React from "react";
import styled from "styled-components";
import StepWrapper from "./styles/StepWrapper";
import StyledH1 from "./styles/StyledH1";
import StyledIframe from "./styles/StyledIframe";

const ExplainSecondSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

const ExplainSecondSection = () => (
  <ExplainSecondSectionWrapper>
    <StepWrapper>
      <StyledH1>Wait what is Face recognition?</StyledH1>
      <StyledIframe
        height="200"
        width="350"
        src="https://www.youtube.com/embed/YX8BzK_LU0E"
        title="YouTube video player"
      />
    </StepWrapper>
  </ExplainSecondSectionWrapper>
);

export default ExplainSecondSection;
