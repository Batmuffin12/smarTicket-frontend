import React from "react";
import Nav from "../components/Nav";
import ExplainMain from "../components/explainMain";
import StyledFooter from "../components/styles/StyledFooter";
import StyledP from "../components/styles/StyledP";

const ExplainPage = () => (
  <>
    <Nav />
    <StyledP>Explanation....</StyledP>
    <ExplainMain />
    <StyledFooter />
  </>
);

export default ExplainPage;
