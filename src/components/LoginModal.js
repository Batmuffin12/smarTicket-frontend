import React from "react";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import StyledH1 from "./styles/StyledH1";
import Button from "./uiKit/Button";

const LoginModal = ({ closeModal }) => {
  return (
    <>
      <Nav />
      <Button onClick={closeModal} text="close" />
      <StyledH1>Hello</StyledH1>
      <LoginForm />
    </>
  );
};

export default LoginModal;
