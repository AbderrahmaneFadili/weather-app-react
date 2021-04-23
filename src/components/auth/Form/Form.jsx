import React from "react";
import { FormContainer } from "./Form.styles";

const Form = ({ onSubmit, children }) => {
  return (
    <FormContainer onSubmit={onSubmit} autoComplete="off" autoCorrect="off">
      {children}
    </FormContainer>
  );
};

export default Form;
