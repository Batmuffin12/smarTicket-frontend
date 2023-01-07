import React from "react";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import StyledButton from "./styles/StyledButton";
import StyledH1 from "./styles/StyledH1";

const LoginModal = ({ closeModal }) => {
  return (
    <>
      <Nav />
      <StyledButton onClick={closeModal}>close</StyledButton>
      <StyledH1>Hello</StyledH1>
      <LoginForm />
    </>
  );
};

export default LoginModal;
