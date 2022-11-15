import React from "react";

//FIXME: doesn't work as it should (i think so)

const Div = ({ className = "", components = [] }) => (
  <div className={className}>
    {components.map((component) => {
      component;
    })}
  </div>
);

export default Div;
