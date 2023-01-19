import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import StyledH1 from "../components/styles/StyledH1";

const ContactWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.largeSize};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.mainPadding};
`;

const ContactUs = () => (
  <ContactWrapper>
    <StyledH1>To contact us please fill this form:</StyledH1>
    <ContactForm />
  </ContactWrapper>
);

export default ContactUs;
