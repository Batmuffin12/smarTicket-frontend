import React from "react";
import StyledForm from "components/styles/StyledForm";
import Form from "./Form";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    //fetch data
  };

  return (
    <StyledForm>
      <Form
        inputs={[
          {
            type: "text",
            size: "mediumSize",
            placeholder: "Your Name:",
          },
          {
            type: "text",
            placeholder: "Your Email:",
            size: "mediumSize",
          },
          {
            type: "text",
            placeholder: "Subject",
            size: "largeSize",
          },
        ]}
        buttons={[
          {
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
