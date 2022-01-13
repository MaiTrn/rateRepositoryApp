import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../theme";

import Text from "../others/Text";

const Info = ({ data, label }) => {
  let renderedData = data;
  if (data / 1000 >= 1) {
    renderedData =
      Number(
        (data / 1000).toPrecision(Math.ceil(data / 1000).toString().length + 1)
      ) + "k";
  }
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{renderedData}</Text>
      <Text color="secondary">{label}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
  },
});
