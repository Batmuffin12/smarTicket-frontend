import React from "react";
import LoginModal from "components/LoginModal";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";

const LoginPage = () => {
  return (
    <StyledModalPageWrapper>
      <StyledModal isOpen={true}>
        <LoginModal />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default LoginPage;
