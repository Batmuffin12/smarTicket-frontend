import styled from "styled-components";
import StyledButton from "./styles/StyledButton";
import StyledP from "./styles/StyledP";

const LoginPopUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.sizes.smallSize};
  background-color: ${({ success }) => (success ? "green" : "red")};
  opacity: 0.7;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: 1s ease-in-out;
`;

const LoginPopUp = ({ text = "", onClick = () => {}, ...rest }) => (
  <LoginPopUpWrapper {...rest}>
    <StyledP>{text}</StyledP>
    <StyledButton onClick={onClick}>X</StyledButton>
  </LoginPopUpWrapper>
);
export default LoginPopUp;
