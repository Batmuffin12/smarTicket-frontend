import React from "react";
import StyledInput from "./styles/StyledInput";
import StyledContactForm from "./styles/StyledForm";
import StyledButton from "./styles/StyledButton";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContactForm>
      <StyledInput size="mediumSize" placeholder="your name:" />
      <StyledInput size="mediumSize" type="email" placeholder="your email:" />
      <StyledInput size="largeSize" placeholder="subject" />
      <StyledButton onClick={submitForm}>submit</StyledButton>
    </StyledContactForm>
  );
};
export default ContactForm;
