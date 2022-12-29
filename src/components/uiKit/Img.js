import React from "react";

const Img = ({ src = "", alt = "image not found" }) => (
  <img src={src.toString()} alt={alt} />
);

export default Img;
