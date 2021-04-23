import React from "react";
import { Button } from "./SubmitButton.styles";

const SubmitButton = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

export default SubmitButton;
