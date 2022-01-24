import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import theme from "../../theme";
import Text from "./Text";

const Button = ({ children, style, color = "primary", ...props }) => {
  const buttonStyle = [
    styles.container,
    style,
    color === "primary" && styles.colorPrimary,
    color === "error" && styles.colorError,
  ];

  return (
    <Pressable style={styles.pressable} {...props}>
      <View style={buttonStyle}>
        <Text color="white" fontWeight="bold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressable: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: theme.spacing.m,
    borderRadius: theme.spacing.s,
    minWidth: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  colorPrimary: { backgroundColor: theme.colors.primary },
  colorError: {
    backgroundColor: theme.colors.error,
  },
});
