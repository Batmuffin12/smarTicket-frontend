import React from "react";
import StyledForm from "./styles/StyledForm";
import Form from "./Form";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const LoginForm = () => {
  const formSubmit = (e) => {
    //fetch data
  };

  return (
    <StyledForm>
      <Form
        InputWrapper={InputWrapper}
        ButtonWrapper={ButtonWrapper}
        inputs={[
          {
            name: "email",
            type: "email",
            placeholder: "Email",
          },
          {
            name: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
        buttons={[
          {
            name: "submit",
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
