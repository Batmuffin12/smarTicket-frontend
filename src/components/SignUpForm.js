import React from "react";
import StyledForm from "./styles/StyledForm";
import Form from "./Form";

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
            inputs={[
              {
                type: "email",
                placeholder: "Email",
              },
              {
                type: "password",
                placeholder: "Password",
              },
              {
                type: "password",
                placeholder: "Confirm Password",
              },
            ]}
            buttons={[
              {
                type: "submit",
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
                type: "text",
                placeholder: "Credit Card Number",
              },
              {
                type: "month",
                placeholder: "",
              },
              {
                type: "text",
                placeholder: "Credit Card CVC",
              },
            ]}
            buttons={[
              {
                type: "submit",
                onClick: clickNextPhase,
                text: "Next Phase",
              },
              {
                type: "submit",
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
            inputs={[
              {
                type: "file",
              },
            ]}
            buttons={[
              {
                type: "submit",
                onClick: formSubmit,
                text: "Submit data",
              },
              {
                type: "submit",
                onClick: clickPrevPhase,
                text: "Edit card details",
              },
            ]}
          />
        </StyledForm>
      ); //returns form with image upload

    default:
      return;
  }
};
export default SignUpForm;
