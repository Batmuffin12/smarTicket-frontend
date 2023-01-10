import React from "react";
import LoginModal from "../components/LoginModal";
import StyledModal from "../components/styles/StyledModal";

const LoginPage = () => {
  return (
    <StyledModal isOpen={true}>
      <LoginModal />
    </StyledModal>
  );
};

export default LoginPage;
