import React from "react";
import { ErrorText } from "./Error.styles";

const Error = ({ children }) => {
  return <ErrorText>{children}</ErrorText>;
};

export default Error;
