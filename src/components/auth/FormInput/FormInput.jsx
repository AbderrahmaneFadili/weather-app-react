import React from "react";
import { Input } from "./FormInput.styles";

const FormInput = ({ name, onChange, placeholder, type, value }) => {
  return (
    <Input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default FormInput;
