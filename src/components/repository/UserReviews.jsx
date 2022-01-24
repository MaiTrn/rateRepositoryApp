import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import useAuthorizedUser from "../../hooks/useAuthorizedUser";
import ReviewInfo from "./ReviewInfo";
import ItemSeparator from "../others/ItemSeparator";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";
import Text from "../others/Text";
import theme from "../../theme";

const UserReviews = () => {
  const { user, refetch, fetchMore } = useAuthorizedUser({
    first: 4,
    includeReviews: true,
  });
  const [reviews, setReviews] = useState();
  const [deleteReview, result] = useMutation(DELETE_REVIEW);

  useEffect(() => {
    if (user) setReviews(user.reviews.edges.map((edge) => edge.node));
  }, [user]);

  useEffect(() => {
    if (result?.data?.deleteReview === true) {
      refetch();
    }
  }, [result.data]);

  const onDelete = async (id) => {
    await deleteReview({
      variables: { id },
    });
  };

  return reviews?.length === 0 ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -theme.spacing.m,
      }}
    >
      <Text fontSize="subheading" fontWeight="bold">
        No reviews...
      </Text>
    </View>
  ) : (
    <FlatList
      data={reviews}
      keyExtractor={(item) => `${item.id}`}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewInfo
          item={item}
          title={item.repository.fullName}
          onDelete={onDelete}
          own
        />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
    />
  );
};

export default UserReviews;
