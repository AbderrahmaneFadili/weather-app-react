import React, { useState } from "react";
import Error from "../Error/Error";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { SignInWrapper, Title } from "./SignIn.styles";

const SignIn = () => {
  return (
    <SignInWrapper>
      <Title>Sign In</Title>
      <Form>
        <FormInput type="text" placeholder="Email..." />

        <FormInput type="password" placeholder="Password..." />

        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
