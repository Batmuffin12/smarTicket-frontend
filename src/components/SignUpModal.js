import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const SignUpModal = () => {
  const [phase, setPhase] = useState(1);

  return (
    <>
      <SignUpForm phase={phase} setPhase={setPhase} />
      <StyledP>
        already has an account?
        <br />
        <StyledLink to="/login">then log in!</StyledLink>
      </StyledP>
    </>
  );
};

export default SignUpModal;
