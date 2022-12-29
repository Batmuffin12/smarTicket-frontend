import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";
import StyledH1 from "../components/styles/StyledH1";

const ContactUs = () => (
  <>
    <Nav />
    <StyledH1 text="how to contact us?" />
    <ContactForm />
  </>
);

export default ContactUs;
