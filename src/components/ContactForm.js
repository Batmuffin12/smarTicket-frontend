import React from "react";
import Button from "./uiKit/Button";
import StyledInput from "./styles/StyledInput";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <StyledInput placeholder="your name:" />
      <StyledInput type="email" placeholder="your email:" />
      <StyledInput size="large" placeholder="subject" />
      <Button text="submit" onClick={submitForm} />
    </form>
  );
};
export default ContactForm;
