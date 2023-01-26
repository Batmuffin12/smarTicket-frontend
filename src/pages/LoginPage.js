import LoginModal from "components/LoginModal";
import PopUp from "components/PopUp";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";
import { useActions } from "hooks/useAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  currentUser: state.currentUser.data,
});

const componentActions = {
  setPopUpState: actions.setPopUpState,
};

const LoginPage = () => {
  const { setPopUpState } = useActions(componentActions);
  const { currentUser } = useSelector(selectors);

  useEffect(() => {
    if (currentUser === null) {
      setPopUpState({ text: "unable to login", open: true });
    }
  }, [currentUser, setPopUpState]);

  return (
    <StyledModalPageWrapper>
      <StyledModal isOpen>
        <LoginModal />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default LoginPage;
