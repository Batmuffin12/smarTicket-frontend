import { useActions } from "hooks/useAction";
import React, { useEffect } from "react";
import actions from "store/actions";
import StyledA from "../components/styles/StyledA";
import StyledButton from "../components/styles/StyledButton";
import StyledH1 from "../components/styles/StyledH1";
import StyledImg from "../components/styles/StyledImg";
import logo from "../logo512.png";

const componentActions = {
  getTrain: actions.getTrain,
};

const HomePage = () => {
  const { getTrain } = useActions(componentActions);
  useEffect(() => {
    getTrain();
  });
  return (
    <>
      <StyledH1 text="Welcome to SmarTicket" />
      <StyledImg src={logo} alt="this is the photo alt" size="mediumImgScale" />
      <br />
      <StyledButton>
        <StyledA href={"/explainPage"}>So what are we doing?</StyledA>
      </StyledButton>
    </>
  );
};

export default HomePage;
