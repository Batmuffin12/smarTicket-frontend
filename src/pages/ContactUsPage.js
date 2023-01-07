import React from "react";
import ContactForm from "../components/ContactForm";
import StyledFooter from "../components/styles/StyledFooter";
import Nav from "../components/Nav";
import StyledH1 from "../components/styles/StyledH1";

const ContactUs = () => (
  <>
    <Nav />
    <StyledH1 text="how to contact us?" />
    <ContactForm />
    <StyledFooter />
  </>
);

export default ContactUs;
