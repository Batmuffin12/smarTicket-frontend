import React from "react";
import styled from "styled-components";
import StepWrapper from "./styles/StepWrapper";
import StyledH1 from "./styles/StyledH1";
import StyledP from "./styles/StyledP";

const ExplainThirdSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  height: 100%;
`;

const ExplainThirdSection = () => (
  <ExplainThirdSectionWrapper>
    <StepWrapper>
      <StyledH1>Buy a ticket to one of the trains</StyledH1>
      <StyledP opacity={0.7}>
        Choose which train you'll be needed at our "Buy a Ticket" section.
      </StyledP>
      <StyledP opacity={0.7}> no need of any physical ticket.</StyledP>
    </StepWrapper>
    <StepWrapper>
      <StyledH1>Get to the train station at time</StyledH1>
      <StyledP opacity={0.7}>
        our machines will identify you and see your digital ticket validation
        and automatically open the gate for you.
      </StyledP>
    </StepWrapper>
  </ExplainThirdSectionWrapper>
);

export default ExplainThirdSection;
