import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledInput from "./styles/StyledInput";

const Form = ({ inputs, buttons, InputWrapper, ButtonWrapper }) => (
  <>
    <InputWrapper>
      {inputs.map((input) => (
        <StyledInput key={input.name} {...input} />
      ))}
    </InputWrapper>
    <ButtonWrapper>
      {buttons.map((button) => (
        <StyledButton key={button.name} {...button}>
          {button.text}
        </StyledButton>
      ))}
    </ButtonWrapper>
  </>
);

export default Form;
