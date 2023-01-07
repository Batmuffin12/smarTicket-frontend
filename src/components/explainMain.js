import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledIframe from "./styles/StyledIframe";

const ExplainMain = () => (
  <>
    <StyledIframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6OyFO6s5Wqw"
      title="YouTube video player"
    />
    <StyledButton>will you use my program?</StyledButton>
  </>
);

export default ExplainMain;
