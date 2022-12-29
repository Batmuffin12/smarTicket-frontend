import React from "react";
import Button from "./uiKit/Button";
import Input from "./uiKit/Input";

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <Input placeholder="your name:" />
      <Input type="email" placeholder="your email:" />
      <Input placeholder="subject" />
      <Button text="submit" onClick={submitForm} />
    </form>
  );
};
export default ContactForm;
