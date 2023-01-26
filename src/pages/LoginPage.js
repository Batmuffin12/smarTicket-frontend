import LoginModal from "components/LoginModal";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";
import { useActions } from "hooks/useAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const loginAttempt = () => {
    if (currentUser === null) {
      setPopUpState({ text: "unable to login", open: true });
    } else if (currentUser) {
      setPopUpState({ text: null, open: false });
      navigate("/", { replace: true });
      localStorage.setItem("token", currentUser.data.token);
    }
  };

  useEffect(() => {
    loginAttempt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, navigate, setPopUpState]);

  return (
    <StyledModalPageWrapper>
      <StyledModal isOpen>
        <LoginModal />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default LoginPage;
