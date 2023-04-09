import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";
import styled from "styled-components";
import StyledButton from "./styles/StyledButton";
import StyledP from "./styles/StyledP";

const LoginPopUpWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
  padding: 0 10px;
  width: 50vw;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: space-between;
  margin: ${({ theme }) => theme.sizes.smallSize};
  background-color: ${({ theme, success }) =>
    success ? theme.colors.success : theme.colors.failure};
  opacity: 0.7;
  transition: 1s ease-in-out;
  z-index: ${({ theme }) => theme.zIndexes.popUp};
`;

const componentActions = {
  setPopUpState: actions.setPopUpState,
};

const selectors = (state) => ({
  popUp: state.popUp,
});

const PopUp = ({ ...rest }) => {
  const { popUp } = useSelector(selectors);
  const { setPopUpState } = useActions(componentActions);
  const closePopUp = () => {
    setPopUpState({ text: null, open: false });
  };
  return (
    <LoginPopUpWrapper success={popUp.success} visible={popUp.open} {...rest}>
      <StyledP>{popUp.text}</StyledP>
      <StyledButton onClick={closePopUp}>X</StyledButton>
    </LoginPopUpWrapper>
  );
};
export default PopUp;
