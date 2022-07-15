import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { SignInWrapper, Title } from "./SignIn.styles";
import { signIn } from "../../../store/actions/authActions";
import { Redirect } from "react-router";
import Error from "../Error/Error";

const SignIn = () => {
  //selector
  const { signinError } = useSelector((state) => state.authData);
  const uid = useSelector((state) => state.firebase.auth.uid);

  const dispatch = useDispatch();

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
    const { email, password } = values;
    dispatch(signIn({ email, password }));
  };

  if (uid) {
    return <Redirect to="/" />;
  } else {
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
          <Error>{signinError && signinError}</Error>
        </Form>
      </SignInWrapper>
    );
  }
};

export default SignIn;
