import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../others/FormikTextInput";
import Button from "../others/Button";

const SignUpForm = ({ onSubmit }) => {
  const password = React.useRef(null);
  const passwordConfirm = React.useRef(null);

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        returnKeyType="next"
        onSubmitEditing={() => password.current?.focus()}
      />
      <FormikTextInput
        ref={password}
        name="password"
        placeholder="Password"
        secureTextEntry
        returnKeyType="next"
        onSubmitEditing={() => passwordConfirm.current?.focus()}
      />
      <FormikTextInput
        ref={passwordConfirm}
        name="passwordConfirm"
        placeholder="Confirm password"
        secureTextEntry
        onSubmitEditing={() => onSubmit()}
      />
      <Button style={styles.button} onPress={onSubmit}>
        Sign up
      </Button>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  button: {
    marginTop: theme.spacing.m,
  },
});
