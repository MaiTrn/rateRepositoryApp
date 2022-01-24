import React from "react";
import { StyleSheet, View } from "react-native";

import theme from "../../theme";
import FormikTextInput from "../others/FormikTextInput";
import Button from "../others/Button";

const SignInForm = ({ onSubmit }) => {
  const password = React.useRef(null);
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        returnKeyType="next"
        onSubmitEditing={() => password.current?.focus()}
      />
      <FormikTextInput
        name="password"
        secureTextEntry
        placeholder="Password"
        ref={password}
        onSubmitEditing={() => onSubmit()}
      />
      <Button style={styles.button} onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  button: {
    marginTop: theme.spacing.m,
  },
});
