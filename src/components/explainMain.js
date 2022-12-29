import React from "react";
import Button from "./uiKit/Button";
import Iframe from "./uiKit/Iframe";

const ExplainMain = () => (
  <>
    <Iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6OyFO6s5Wqw"
      title="YouTube video player"
    />
    <Button>will you use my program?</Button>
  </>
);

export default ExplainMain;
