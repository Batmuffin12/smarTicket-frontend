import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledForm from "./styles/StyledForm";
import StyledInput from "./styles/StyledInput";
import Form from "./Form";
const LoginForm = () => {
  const formSubmit = (e) => {
    //fetch data
  };

  return (
    <StyledForm>
      <Form
        inputs={[
          {
            type: "email",
            placeholder: "Email",
          },
          {
            type: "password",
            placeholder: "Password",
          },
        ]}
        buttons={[
          {
            type: "submit",
            onClick: formSubmit,
            text: "Submit",
          },
        ]}
      />
    </StyledForm>
  );
};

export default LoginForm;
