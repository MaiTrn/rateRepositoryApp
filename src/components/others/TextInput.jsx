import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../../theme";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },

  textInput: {
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    marginVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.m,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: theme.spacing.s,
    borderColor: "#aab2bb",
  },
});
