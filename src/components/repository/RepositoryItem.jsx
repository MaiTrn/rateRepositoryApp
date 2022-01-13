import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../others/Text";
import theme from "../../theme";
import Info from "./Info";

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", height: 90 }}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="secondary">{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text color="white">{item.language}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Info data={item.stargazersCount} label="Stars" />
        <Info data={item.forksCount} label="Forks" />
        <Info data={item.reviewCount} label="Reviews" />
        <Info data={item.ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.s,
  },
  avatar: { width: 50, height: 50, borderRadius: theme.spacing.s },
  avatarContainer: { flexGrow: 0 },
  infoContainer: {
    flexGrow: 0,
    marginHorizontal: theme.spacing.m,
    justifyContent: "space-between",
  },
  languageContainer: {
    padding: theme.spacing.s,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.s,
  },
});
