import React from "react";

const Button = ({ onClick = () => {}, ...rest }) => (
  <button onClick={onClick} {...rest}></button>
);

export default Button;
