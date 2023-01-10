import React from "react";

const A = ({ link, ...rest }) => <a href={link} {...rest}></a>;

export default A;
