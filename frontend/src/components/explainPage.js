import React from "react";
import Nav from "./Nav";

const ExplainPage = () => (
  <>
    <Nav />
    <p> Explanation....</p>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6OyFO6s5Wqw"
        title="YouTube video player"
      ></iframe>
      <button>will you use my program?</button>
    </div>
  </>
);

export default ExplainPage;
