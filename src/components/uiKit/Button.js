import React from "react";
import StyledButton from "../styles/StyledButton";

const Button = ({ onClick = () => {}, text = "", ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    {text}
  </StyledButton>
);

export default Button;
