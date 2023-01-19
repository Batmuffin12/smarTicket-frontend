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
          <Form
            InputWrapper={InputWrapper}
            inputs={[
              {
                name: "name",
                type: "email",
                placeholder: "Email",
              },
              {
                name: "password",
                type: "password",
                placeholder: "Password",
              },
              {
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
              },
            ]}
            ButtonWrapper={ButtonWrapper}
            buttons={[
              {
                name: "nextPhase",
                onClick: clickNextPhase,
                text: "Next Phase",
              },
            ]}
          />
        </StyledForm>
      );

    case 2:
      return (
        <StyledForm>
          <Form
            inputs={[
              {
                name: "creditNumber",
                type: "text",
                placeholder: "Credit Card Number",
              },
              {
                name: "creditValid",
                type: "month",
                placeholder: "",
              },
              {
                name: "creditCVC",
                type: "text",
                placeholder: "Credit Card CVC",
              },
            ]}
            InputWrapper={InputWrapper}
            ButtonWrapper={ButtonWrapper}
            buttons={[
              {
                name: "nextPhase",
                onClick: clickNextPhase,
                text: "Next Phase",
              },
              {
                name: "back",
                onClick: clickPrevPhase,
                text: "Edit email and password",
              },
            ]}
          />
        </StyledForm>
      );

    case 3:
      return (
        <StyledForm>
          <Form
            InputWrapper={InputWrapper}
            ButtonWrapper={ButtonWrapper}
            inputs={[
              {
                name: "image",
                type: "file",
              },
            ]}
            buttons={[
              {
                name: "submit",
                type: "submit",
                onClick: formSubmit,
                text: "Submit data",
              },
              {
                name: "back",
                onClick: clickPrevPhase,
                text: "Edit card details",
              },
            ]}
          />
        </StyledForm>
      ); //returns form with image upload

    default:
      return <div />;
  }
};
export default SignUpForm;
