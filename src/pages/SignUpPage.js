import React from "react";
import SignUpModal from "../components/SignUpModal";
import StyledModal from "../components/styles/StyledModal";

const LoginPage = () => {
  return (
    <StyledModal isOpen={true}>
      <SignUpModal />
    </StyledModal>
  );
};

export default LoginPage;
