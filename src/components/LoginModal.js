import React from "react";
import LoginForm from "./LoginForm";
import StyledA from "./styles/StyledA";
import StyledP from "./styles/StyledP";

const LoginModal = () => {
  return (
    <>
      <LoginForm />
      <StyledP>
        Not signed yet?
        <br />
        <StyledA link="/signup">sign up!</StyledA>
      </StyledP>
    </>
  );
};

export default LoginModal;
