import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import Constants from "expo-constants";
import { useQuery, useApolloClient } from "@apollo/client";

import theme from "../../theme";
import Text from "../others/Text";
import AppBarTab from "./AppBarTab";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";

const AppBar = () => {
  const result = useQuery(GET_AUTHORIZED_USER);
  const [signedIn, setSignedIn] = useState(false);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.clearAccessToken();
      apolloClient.resetStore();
      setSignedIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (result.data) {
      if (result.data.authorizedUser !== null) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    }
  }, [result.data]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab title="Repositories" link={"/"} />
        {signedIn ? (
          <Pressable
            style={{ padding: theme.spacing.m }}
            onPress={() => signOut()}
          >
            <Text fontWeight="bold" fontSize="subheading" color="white">
              Sign out
            </Text>
          </Pressable>
        ) : (
          <AppBarTab title="Sign in" link={"/signIn"} />
        )}
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
