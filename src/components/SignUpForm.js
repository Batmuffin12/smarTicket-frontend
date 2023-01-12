import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledForm from "./styles/StyledForm";
import StyledInput from "./styles/StyledInput";

const SignUpForm = (props) => {
  const clickNextPhase = (e) => {
    props.setPhase(props.phase + 1);
  };

  const clickPrevPhase = (e) => {
    props.setPhase(props.phase - 1);
  };

  const formSubmit = (e) => {
    //fetch data
  };

  switch (props.phase) {
    case 1:
      return (
        <StyledForm>
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="password" />
          <StyledInput type="password" placeholder="confirm password" />
          <StyledButton type="submit" onClick={clickNextPhase}>
            Next Phase
          </StyledButton>
        </StyledForm>
      );

    case 2:
      return (
        <StyledForm>
          <StyledInput type="text" placeholder="credit card number" />
          <StyledInput type="month" placeholder="credit card valid date" />
          <StyledInput type="text" placeholder="credit card cvc" />
          <StyledButton type="submit" onClick={clickNextPhase}>
            Next Phase
          </StyledButton>
          <StyledButton type="submit" onClick={clickPrevPhase}>
            edit email and password
          </StyledButton>
        </StyledForm>
      );

    case 3:
      return (
        <StyledForm>
          <StyledInput type="file" />
          <StyledButton type="submit" onClick={formSubmit}>
            Submit data
          </StyledButton>
        </StyledForm>
      ); //returns form with image upload

    default:
      return;
  }
};
export default SignUpForm;
