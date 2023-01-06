import React from "react";
import Button from "./uiKit/Button";
import StyledInput from "./styles/StyledInput";
import StyledContactForm from "./styles/StyledForm";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContactForm>
      <StyledInput
        size="mediumSize
"
        placeholder="your name:"
      />
      <StyledInput
        size="mediumSize
"
        type="email"
        placeholder="your email:"
      />
      <StyledInput size="largeSize" placeholder="subject" />
      <Button text="submit" onClick={submitForm} />
    </StyledContactForm>
  );
};
export default ContactForm;
