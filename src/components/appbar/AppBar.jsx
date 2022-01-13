import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab title="Repositories" link={"/"} />
        <AppBarTab title="Sign in" link={"/signIn"} />
        <AppBarTab title="Create a review" link={"/"} />
        <AppBarTab title="Create a review" link={"/"} />
        <AppBarTab title="Create a review" link={"/"} />
      </ScrollView>
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
