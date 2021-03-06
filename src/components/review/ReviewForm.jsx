import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";

import Text from "../others/Text";
import FormikTextInput from "../others/FormikTextInput";
import theme from "../../theme";
import Button from "../others/Button";

const ReviewForm = ({ onSubmit, error }) => {
  const repoName = useRef(null);
  const rating = useRef(null);
  const review = useRef(null);

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        returnKeyType="next"
        onSubmitEditing={() => repoName.current?.focus()}
      />
      <FormikTextInput
        ref={repoName}
        name="repositoryName"
        placeholder="Repository name"
        returnKeyType="next"
        onSubmitEditing={() => rating.current?.focus()}
      />
      <FormikTextInput
        ref={rating}
        name="rating"
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => review.current?.focus()}
      />
      <FormikTextInput
        ref={review}
        name="text"
        placeholder="Review"
        multiline
        onSubmitEditing={() => onSubmit()}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button onPress={onSubmit} style={styles.button}>
        Create a review
      </Button>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  button: {
    marginTop: theme.spacing.m,
  },
  errorText: {
    marginTop: theme.spacing.s,
    color: theme.colors.error,
    textAlign: "center",
  },
});
