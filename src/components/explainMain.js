import React from "react";
import StyledButton from "./styles/StyledButton";
import Iframe from "./uiKit/Iframe";

const ExplainMain = () => (
  <>
    <Iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6OyFO6s5Wqw"
      title="YouTube video player"
    />
    <StyledButton>will you use my program?</StyledButton>
    {/* {Array.map((train) => <trainComponent {...train}/>)} */}
  </>
);

export default ExplainMain;
