import React from "react";
import { SignUpWrapper, Title } from "./SignUp.styles";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import Error from "../Error/Error";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <Title>Sign Up</Title>
      <Form>
        <FormInput type="text" placeholder="Email..." />
        <FormInput type="password" placeholder="Password..." />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
