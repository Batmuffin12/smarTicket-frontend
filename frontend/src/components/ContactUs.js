import React from "react";
import Nav from "./Nav";

const ContactUs = () => (
  <>
    <Nav />
    <h1>how to contact us?</h1>
    <form>
      <input placeholder="your name:" />
      <input type="email" placeholder="your email:" />
      <input placeholder="subject" />
    </form>
    <button>submit</button>
  </>
);

export default ContactUs;
