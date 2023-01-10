import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledForm from "./styles/StyledForm";
import StyledInput from "./styles/StyledInput";

const LoginForm = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    //fetch data
  };

  return (
    <StyledForm>
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="password" />
      <StyledButton type="submit" onClick={formSubmit}>
        submit
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
