import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledForm from "./styles/StyledForm";
import StyledInput from "./styles/StyledInput";

const SignUpForm = (props) => {
  const clickNextPhase = (e) => {
    e.preventDefault();
    props.setPhase(props.phase + 1);
  };

  const clickPrevPhase = (e) => {
    e.preventDefault();
    props.setPhase(props.phase - 1);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    //fetch data
  };

  if (props.phase === 2) {
    return (
      <StyledForm>
        <StyledInput type="text" placeholder="credit card number" />
        <StyledInput type="month" placeholder="credit card valid date" />
        <StyledInput type="text" placeholder="credit card cvc" />
        <StyledButton type="submit" onClick={formSubmit}>
          submit
        </StyledButton>
        <StyledButton type="submit" onClick={clickPrevPhase}>
          edit email and password
        </StyledButton>
      </StyledForm>
    );
  }
  return (
    <StyledForm>
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="password" />
      <StyledInput type="password" placeholder="confirm password" />
      <StyledButton type="submit" onClick={clickNextPhase}>
        submit
      </StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
