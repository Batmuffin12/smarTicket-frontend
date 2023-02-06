import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  onChange,
  min = "",
  ...rest
}) => (
  <input type={type} placeholder={placeholder} onChange={onChange} {...rest} />
);

export default Input;
