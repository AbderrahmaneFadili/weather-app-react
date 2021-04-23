import React, { useState } from "react";
import Error from "../Error/Error";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { SignInWrapper, Title } from "./SignIn.styles";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleValueChange = ({ target: { value, name } }) => {
    setValues((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <SignInWrapper>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          onChange={handleValueChange}
          value={values.email}
          type="text"
          placeholder="Email..."
        />

        <FormInput
          name="password"
          onChange={handleValueChange}
          value={values.password}
          type="password"
          placeholder="Password..."
        />
        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
