import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const SignUpModalWrapper = styled.div`
  height: 400px;
  width: 600px;
`;

const SignUpModal = () => {
  const [phase, setPhase] = useState(1);

  return (
    <SignUpModalWrapper>
      <SignUpForm phase={phase} setPhase={setPhase} />
      <StyledP>
        already has an account?
        <br />
        <StyledLink to="/login">then log in!</StyledLink>
      </StyledP>
    </SignUpModalWrapper>
  );
};

export default SignUpModal;
