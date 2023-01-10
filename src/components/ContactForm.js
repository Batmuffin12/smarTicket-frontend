import React from "react";
import StyledInput from "./styles/StyledInput";
import StyledForm from "./styles/StyledForm";
import StyledButton from "./styles/StyledButton";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    //fetch data
  };

  return (
    <StyledForm>
      <StyledInput size="mediumSize" placeholder="your name:" />
      <StyledInput size="mediumSize" type="email" placeholder="your email:" />
      <StyledInput size="largeSize" placeholder="subject" />
      <StyledButton onClick={submitForm}>submit</StyledButton>
    </StyledForm>
  );
};
export default ContactForm;
