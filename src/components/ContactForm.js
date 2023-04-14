import React from "react";
import StyledForm from "components/styles/StyledForm";
import Form from "./Form";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 250px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ContactForm = ({ submitForm, addInputData }) => {
  return (
    <StyledForm>
      <Form
        InputWrapper={InputWrapper}
        ButtonWrapper={ButtonWrapper}
        inputs={[
          {
            onChange: addInputData,
            name: "name",
            type: "text",
            size: "mediumSize",
            placeholder: "Your Name:",
          },
          {
            onChange: addInputData,
            name: "email",
            type: "text",
            placeholder: "Your Email:",
            size: "mediumSize",
          },
          {
            onChange: addInputData,
            name: "subject",
            type: "text",
            placeholder: "Subject",
            size: "largeSize",
          },
        ]}
        buttons={[
          {
            name: "submit",
            type: "submit",
            onClick: submitForm,
            text: "submit",
          },
        ]}
      />
    </StyledForm>
  );
};
export default ContactForm;
