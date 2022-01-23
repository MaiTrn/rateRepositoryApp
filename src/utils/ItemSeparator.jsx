import React from "react";
import { View, StyleSheet } from "react-native";

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
