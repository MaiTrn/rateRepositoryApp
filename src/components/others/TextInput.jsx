import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../../theme";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error ? styles.error : styles.valid];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },
  valid: {
    borderColor: theme.colors.secondary,
  },
});
