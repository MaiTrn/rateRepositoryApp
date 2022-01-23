import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import * as Linking from "expo-linking";

import Text from "../others/Text";
import theme from "../../theme";
import formatInThousands from "../../utils/formatInThousands";

const CountItem = ({ data, label }) => {
  return (
    <View style={styles.countItemContainer}>
      <Text fontWeight="bold" style={styles.counter}>
        {formatInThousands(data)}
      </Text>
      <Text color="secondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, single }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
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
        <CountItem data={item.stargazersCount} label="Stars" />
        <CountItem data={item.forksCount} label="Forks" />
        <CountItem data={item.reviewCount} label="Reviews" />
        <CountItem data={item.ratingAverage} label="Rating" />
      </View>
      {single && (
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text color="white" fontWeight="bold">
            Open in GitHub
          </Text>
        </Pressable>
      )}
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
    marginBottom: theme.spacing.s,
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
  countItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.m,
    flexGrow: 0,
  },
  counter: {
    marginBottom: theme.spacing.s,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 64,
    padding: theme.spacing.m,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.s,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.s,
  },
});
