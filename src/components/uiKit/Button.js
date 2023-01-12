import React from "react";

const Button = ({ onClick = () => {}, ...rest }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    {...rest}
  ></button>
);

export default Button;
