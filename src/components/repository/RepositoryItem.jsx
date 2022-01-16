import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../others/Text";
import theme from "../../theme";
import Info from "./Info";

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {item.fullName}
          </Text>
          <Text style={styles.descriptionText} color="secondary">
            {item.description}
          </Text>
          {item.language ? (
            <View style={styles.languageContainer}>
              <Text color="white" style={styles.languageText}>
                {item.language}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
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
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: theme.spacing.m,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatarContainer: {
    flexGrow: 0,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: theme.spacing.m,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.spacing.s,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.s,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
});
