import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import useAuthStorage from "../../hooks/useAuthStorage";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";

const AppBar = () => {
  const { user } = useAuthorizedUser();
  const [signedIn, setSignedIn] = useState(false);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await authStorage.clearAccessToken();
      apolloClient.resetStore();
      setSignedIn(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab title="Repositories" link="/" />
        {signedIn ? (
          <>
            <AppBarTab title="Create a review" link="/createReview" />
            <AppBarTab title="My reviews" link="/review" />
            <AppBarTab title="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab title="Sign in" link="/signIn" />
            <AppBarTab title="Sign up" link="/signUp" />
          </>
        )}
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
