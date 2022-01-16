import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositories from "../../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  if (loading) {
    return <Text style={{ textAlign: "center" }}>loading...</Text>;
  }

  const onEndReach = () => {
    console.log("You have reached the end of the list");
  };
  return (
    <FlatList
      keyExtractor={(item) => `${item.id}`}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
