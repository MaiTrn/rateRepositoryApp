import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" />
      <AppBarTab title="Create a review" />
      <AppBarTab title="Sign out" />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
