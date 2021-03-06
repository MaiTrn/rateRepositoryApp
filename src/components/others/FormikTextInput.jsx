import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../../theme";

const FormikTextInput = React.forwardRef(({ name, ...props }, ref) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        ref={ref}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
});

FormikTextInput.displayName = "FormikTextInput";

export default FormikTextInput;

const styles = StyleSheet.create({
  errorText: {
    marginLeft: theme.spacing.m,
    color: theme.colors.error,
  },
});
