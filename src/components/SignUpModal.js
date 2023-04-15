import { useActions } from "hooks/useAction";
import React, { useState } from "react";
import actions from "store/actions";
import styled from "styled-components";
import { fileToBase64 } from "utils/generalUtils";
import Phase from "./Phase";
import SignUpForm from "./SignUpForm";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const SignUpModalWrapper = styled.div`
  height: 450px;
  width: 600px;
`;

const componentsActions = {
  register: actions.register,
  setPopUpState: actions.setPopUpState,
};

const SignUpModal = () => {
  const [phase, setPhase] = useState(1);
  const [information, setInformation] = useState({ isAdmin: false });
  const { register, setPopUpState } = useActions(componentsActions);
  const changeInputData = ({ key, value }) =>
    setInformation({ ...information, [key]: value });

  const addInputData = (e) => {
    changeInputData({ key: e.target.name, value: e.target.value });
  };

  const addFileData = (e) => {
    setInformation({ ...information, img: e.target.files[0] });
  };

  const formSubmit = async () => {
    const newBaseObject = { ...information };

    delete newBaseObject.cardValid;
    delete newBaseObject.cardCSC;
    delete newBaseObject.cardNumber;
    delete newBaseObject.confirmPassword;

    const sendDataObject = {
      ...newBaseObject,
      creditCard: {
        cardValid: new Date(`${information.cardValid}-01`).getTime(),
        cardCSC: information.cardCSC,
        cardNum: information.cardNum,
      },
      img: await fileToBase64(newBaseObject.img),
    };
    const fileOptions = ["png", "jpg", "jpeg"];
    const isImageValid = fileOptions.reduce((isValidFile, currentFormat) => {
      if (!isValidFile && sendDataObject.img.includes(`image/${currentFormat}`))
        sendDataObject.imgType = currentFormat;
      return (
        isValidFile || sendDataObject.img.includes(`image/${currentFormat}`)
      );
    }, false);
    if (isImageValid) {
      register(sendDataObject);
    } else {
      setPopUpState({
        text: "file isn`t a photo ",
        open: true,
        success: false,
      });
    }
  };
  return (
    <SignUpModalWrapper>
      <Phase items={[{}, {}, {}]} phase={phase} />
      <SignUpForm
        phase={phase}
        setPhase={setPhase}
        setInformation={setInformation}
        formSubmit={formSubmit}
        addInputData={addInputData}
        addFileData={addFileData}
        information={information}
      />
      <StyledP>
        already has an account?
        <br />
        <StyledLink to="/login">then log in!</StyledLink>
      </StyledP>
    </SignUpModalWrapper>
  );
};

export default SignUpModal;
