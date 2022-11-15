import React from "react";
import Nav from "../components/Nav";
import P from "../tags/P";
import Iframe from "../tags/iframe";
import Button from "../tags/button";

const ExplainPage = () => (
  <>
    <Nav />
    <P text="Explanation...." />
    <div>
      <Iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6OyFO6s5Wqw"
        title="YouTube video player"
      />
      <Button text="will you use my program?" />
    </div>
  </>
);

export default ExplainPage;
