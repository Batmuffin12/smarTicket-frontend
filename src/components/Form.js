import React from "react";
import StyledButton from "./styles/StyledButton";
import StyledInput from "./styles/StyledInput";

const Form = ({ inputs, buttons }) => (
  <>
    {inputs.map((input) => (
      <StyledInput {...input} />
    ))}
    {buttons.map((button) => (
      <StyledButton {...button}>{button.text}</StyledButton>
    ))}
  </>
);

export default Form;
