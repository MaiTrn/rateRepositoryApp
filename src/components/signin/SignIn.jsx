import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username too short!")
    .max(25, "Username too long!")
    .required("Required"),
  password: yup
    .string()
    .min(6, "Password too short!")
    .max(25, "Password too long!")
    .required("Required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
