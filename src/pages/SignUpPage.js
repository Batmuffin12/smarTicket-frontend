import React from "react";
import SignUpModal from "../components/SignUpModal";
import StyledModal from "../components/styles/StyledModal";
import StyledModalPageWrapper from "../components/styles/StyledModalPageWrapper";

const LoginPage = () => {
  return (
    <StyledModalPageWrapper>
      <StyledModal isOpen={true}>
        <SignUpModal />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default LoginPage;
