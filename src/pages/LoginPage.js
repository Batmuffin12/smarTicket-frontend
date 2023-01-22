import React from "react";
import LoginModal from "components/LoginModal";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPopUp from "components/LoginPopUp";

const selectors = (state) => ({
  currentUser: state.currentUser.data,
});

const LoginPage = () => {
  const [badLogin, setBadLogin] = useState(false);
  const [pressed, setPressed] = useState(false);
  const { currentUser } = useSelector(selectors);

  useEffect(() => {
    if (!currentUser) {
      setBadLogin(true);
    } else {
      setBadLogin(false);
    }
  }, [currentUser]);

  const closePopUp = () => {
    setPressed("");
  };
  return (
    <StyledModalPageWrapper>
      {badLogin ? (
        <LoginPopUp
          success={false}
          visible={pressed}
          text="Unable to Login "
          onClick={closePopUp}
        />
      ) : (
        <LoginPopUp
          success={true}
          visible={pressed}
          text="Login Successful"
          onClick={closePopUp}
        />
      )}
      <StyledModal isOpen={true}>
        <LoginModal setPressed={setPressed} />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default LoginPage;
