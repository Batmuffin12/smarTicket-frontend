import { useActions } from "hooks/useAction";
import { useState } from "react";
import actions from "store/actions";
import styled from "styled-components";
import Form from "./Form";
import StyledForm from "./styles/StyledForm";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const componentActions = {
  login: actions.login,
  setPopUpState: actions.setPopUpState,
};

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useActions(componentActions);

  const changeInputValue = (e) =>
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));

  const formSubmit = (e) => {
    login({
      email: formData.email,
      password: formData.password,
    });
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
