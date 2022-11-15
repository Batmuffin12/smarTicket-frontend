import React from "react";
import Nav from "../tags/Nav";
import H1 from "../tags/H1";
import Input from "../tags/input";
import Button from "../tags/button";

const ContactUs = () => (
  <>
    <Nav />
    <H1 text="how to contact us?" />
    <form>
      <Input placeholder="your name:" />
      <Input type="email" placeholder="your email:" />
      <Input placeholder="subject" />
    </form>
    <Button text="submit" />
  </>
);

export default ContactUs;
