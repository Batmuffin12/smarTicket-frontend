import React from "react";
import StyledForm from "./styles/StyledForm";
import Form from "./Form";
import styled from "styled-components";
import { useState } from "react";
import { useActions } from "hooks/useAction";
import actions from "store/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const componentActions = {
  login: actions.login,
};
const selectors = (state) => ({
  currentUser: state.currentUser.data,
});
const LoginForm = ({ setPressed }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useActions(componentActions);
  const { currentUser } = useSelector(selectors);

  const changeInputValue = (e) =>
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));

  const formSubmit = async (e) => {
    await login({
      email: formData.email,
      password: formData.password,
    });
    setPressed(true);
    console.log(currentUser);
  };

  return (
    <StyledForm>
      <Form
        InputWrapper={InputWrapper}
        ButtonWrapper={ButtonWrapper}
        inputs={[
          {
            onChange: changeInputValue,
            name: "email",
            type: "email",
            placeholder: "Email",
          },
          {
            onChange: changeInputValue,
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
