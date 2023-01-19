import React from "react";
import LoginForm from "./LoginForm";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const LoginModal = () => {
  return (
    <>
      <LoginForm />
      <StyledP>
        Not signed yet?
        <br />
        <StyledLink to="/signup">sign up!</StyledLink>
      </StyledP>
    </>
  );
};

export default LoginModal;
