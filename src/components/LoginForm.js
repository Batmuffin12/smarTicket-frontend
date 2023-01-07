import React from "react";
import StyledButton from "./styles/StyledButton";
import Input from "./uiKit/Input";

const LoginForm = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input placeholder="password" />
      <StyledButton type="submit" onClick={formSubmit}>
        submit
      </StyledButton>
    </form>
  );
};

export default LoginForm;
