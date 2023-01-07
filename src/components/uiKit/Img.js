import React from "react";

const Img = ({ src = "", alt = "image not found", ...rest }) => (
  <img src={src} alt={alt} {...rest} />
);

export default Img;
