import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import StyledA from "./styles/StyledA";
import StyledP from "./styles/StyledP";

const SignUpModal = () => {
  const [phase, setPhase] = useState(1);

  return (
    <>
      <SignUpForm phase={phase} setPhase={setPhase} />
      <StyledP>
        already has an account?
        <br />
        <StyledA link="/login">then log in!</StyledA>
      </StyledP>
    </>
  );
};

export default SignUpModal;
