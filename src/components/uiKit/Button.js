import React from "react";
import StyledButton from "../styles/StyledButton";

const Button = ({ onClick = () => {}, ...rest }) => (
  <StyledButton onClick={onClick} {...rest} />
);

export default Button;
