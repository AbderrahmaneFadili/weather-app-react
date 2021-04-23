import React, { useState } from "react";
import { SignUpWrapper, Title } from "./SignUp.styles";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../store/actions/authActions";

const SignUp = () => {
  //selector
  const errorMessage = useSelector((state) => state.authData.errorMessage);
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
    console.log(email, password);
    dispatch(signUp({ email, password }));
  };
  return (
    <SignUpWrapper>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleValueChange}
          type="text"
          placeholder="Email..."
          name={"email"}
          value={values.email}
        />
        <FormInput
          onChange={handleValueChange}
          type="password"
          placeholder="Password..."
          name={"password"}
          value={values.password}
        />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <Error>{errorMessage && errorMessage}</Error>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
