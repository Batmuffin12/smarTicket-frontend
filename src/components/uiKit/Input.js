import React from "react";

const Input = ({ type = "text", placeholder = "", ...rest }) => (
  <input type={type} placeholder={placeholder} {...rest} />
);

export default Input;
