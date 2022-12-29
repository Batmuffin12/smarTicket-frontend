import React from "react";
import Button from "./uiKit/Button";
import Input from "./uiKit/Input";

const LoginForm = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input placeholder="password" />
      <Button type="submit" text="submit" onClick={formSubmit} />
    </form>
  );
};

export default LoginForm;
