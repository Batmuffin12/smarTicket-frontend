import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const LoginModalWrapper = styled.div`
  height: 200px;
  width: 300px;
`;

const LoginModal = () => {
  return (
    <LoginModalWrapper>
      <LoginForm />
      <StyledP>
        Not signed yet?
        <br />
        <StyledLink to="/signup">sign up!</StyledLink>
      </StyledP>
    </LoginModalWrapper>
  );
};

export default LoginModal;
