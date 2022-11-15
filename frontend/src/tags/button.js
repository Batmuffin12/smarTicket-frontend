import React from "react";

const Button = ({ type, className = "", text = "", onClick = () => {} }) => (
  <button className={className} type={type} onClick={onClick}>
    {text}
  </button>
);
export default Button;
