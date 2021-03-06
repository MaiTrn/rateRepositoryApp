import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { format } from "date-fns";

import theme from "../../theme";
import Text from "../others/Text";
import Button from "../others/Button";
import { useNavigate } from "react-router-native";

const ReviewInfo = ({ title, item, own, onDelete }) => {
  const navigate = useNavigate();

  const confirmDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => onDelete(item.id),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainter}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold" fontSize="subheading">
            {item.rating}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Text fontWeight="bold" fontSize="subheading">
              {title}
            </Text>
            <Text color="secondary">
              {format(new Date(item.createdAt), "dd.MM.yyyy")}
            </Text>
          </View>
          <Text>{item.text}</Text>
        </View>
      </View>
      {own && (
        <View style={styles.buttonContainer}>
          <Button
            style={styles.actionButton}
            onPress={() => navigate(`/repository/${item.repository.id}`)}
          >
            View Repository
          </Button>
          <Button color="error" onPress={confirmDelete}>
            Delete review
          </Button>
        </View>
      )}
    </View>
  );
};

export default ReviewInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.m,
  },
  infoContainter: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: theme.spacing.m,
    flexDirection: "row",
  },
  topContainer: {
    marginBottom: theme.spacing.s,
  },
  ratingContainer: {
    flexGrow: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: theme.spacing.m,
  },
  dateText: {
    flexGrow: 1,
    marginBottom: theme.spacing.m,
  },
  actionButton: { marginRight: 10 },
});
