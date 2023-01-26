import LoginModal from "components/LoginModal";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";
import { useActions } from "hooks/useAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import { useNavigate } from "react-router-dom";
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
  useEffect(() => {
    if (currentUser === null) {
      setPopUpState({ text: "unable to login", open: true });
    } else if (currentUser) {
      setPopUpState({ text: null, open: false });
      navigate("/", { replace: true });
      localStorage.setItem("token", currentUser.data.token);
    }
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
