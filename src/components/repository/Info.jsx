import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../theme";

import Text from "../others/Text";

const round = (value, decimals = 1) => {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};

const Info = ({ data, label }) => {
  if (typeof data !== "number") {
    return undefined;
  }
  let renderedData = data;
  if (data > 1000) {
    renderedData = round(data / 1000);
  }

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={styles.counter}>
        {renderedData.toLocaleString()}
      </Text>
      <Text color="secondary">{label}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.m,
    flexGrow: 0,
  },
  counter: {
    marginBottom: theme.spacing.s,
  },
});
