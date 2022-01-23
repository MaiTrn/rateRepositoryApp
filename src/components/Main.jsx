import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Navigate, Routes } from "react-router-native";

import RepositoryList from "./repository//RepositoryList";
import AppBar from "./appbar/AppBar";
import theme from "../theme";
import SignIn from "./signin/SignIn";
import Repository from "./repository/Repository";
import UserReviews from "./repository/UserReviews";
import Review from "./review/Review";
import SignUp from "./singup/SignUp";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/repository/:id" element={<Repository />} />
        <Route path="/createReview" element={<Review />} />
        <Route path="/review" element={<UserReviews />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});
