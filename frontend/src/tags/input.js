import React from "react";

const Input = ({ className = "", type = "text", placeholder = "" }) => (
  <input className={className} type={type} placeholder={placeholder} />
);

export default Input;
