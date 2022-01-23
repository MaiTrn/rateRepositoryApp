import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ signIn, navigate }) => {
  const onSubmit = async (values) => {
    try {
      await signIn(values);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  return <SignInContainer signIn={signIn} navigate={navigate} />;
};

export default SignIn;
