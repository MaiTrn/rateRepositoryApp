import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import useSignUp from "../../hooks/useSignUp";
import SignUpForm from "./SignUpForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Too short!")
    .max(30, "Too long!")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Too short!")
    .max(50, "Too long!")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .equals([yup.ref("password")], "Passwords don't match")
    .required("Password confirmation is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "", passwordConfirm: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
