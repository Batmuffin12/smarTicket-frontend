import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "components/ContactForm";
import StyledH1 from "components/styles/StyledH1";
import actions from "store/actions";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";

const ContactWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.largeSize};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const componentActions = {
  setPopUpState: actions.setPopUpState,
  sendContactUsEmail: actions.sendContactUsEmail,
};
const selectors = (state) => ({
  contactUsEmail: state.contactUsEmail?.data,
});

const ContactUs = () => {
  const { setPopUpState, sendContactUsEmail } = useActions(componentActions);
  const { contactUsEmail } = useSelector(selectors);
  const [information, setInformation] = useState({});
  const changeInputData = ({ key, value }) =>
    setInformation({ ...information, [key]: value });

  const addInputData = (e) => {
    changeInputData({ key: e.target.name, value: e.target.value });
  };
  const sendEmail = (e) => {
    sendContactUsEmail(information);
    if (contactUsEmail !== undefined) {
      setPopUpState({
        text: "email was send thank you for submitting",
        open: true,
        success: true,
      });
    } else {
      setPopUpState({
        text: "email was not send successfully. please try again",
        open: true,
        success: false,
      });
    }
  };
  return (
    <ContactWrapper>
      <StyledH1>To contact us please fill this form:</StyledH1>
      <ContactForm
        submitForm={sendEmail}
        addInputData={addInputData}
        setInformation={setInformation}
        information={information}
      />
    </ContactWrapper>
  );
};

export default ContactUs;
