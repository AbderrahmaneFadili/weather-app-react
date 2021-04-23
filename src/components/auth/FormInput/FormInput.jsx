import React from "react";
import { Input } from "./FormInput.styles";

const FormInput = ({ onChange, placeholder, type, value }) => {
  return (
    <Input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default FormInput;
