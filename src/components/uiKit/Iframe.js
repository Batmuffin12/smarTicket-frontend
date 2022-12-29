import React from "react";

const Iframe = ({
  src = "",
  width = 560,
  height = 315,
  className = "",
  title = "",
}) => {
  if (src) {
    return (
      <iframe
        className={className}
        src={src}
        width={width}
        height={height}
        title={title}
      />
    );
  }
};
export default Iframe;
