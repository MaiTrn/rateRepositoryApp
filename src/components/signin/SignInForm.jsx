import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "../others/Text";
import theme from "../../theme";
import FormikTextInput from "../others/FormikTextInput";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" secureTextEntry placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.m,
    paddingHorizontal: 20,
    marginTop: theme.spacing.m,
    minWidth: 64,
    borderRadius: theme.spacing.s,
    backgroundColor: theme.colors.primary,
  },
});
