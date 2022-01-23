import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import ReviewInfo from "./ReviewInfo";
import useRepository from "../../hooks/useRepository";
import ItemSeparator from "../../utils/ItemSeparator";

const Repository = () => {
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  const { repository, fetchRepository, fetchMore } = useRepository({
    id,
    first: 3,
  });

  useEffect(async () => {
    if (id) await fetchRepository();
  }, [id]);

  useEffect(() => {
    if (repository) {
      setReviews(repository.reviews.edges.map((edge) => edge.node));
    }
  }, [repository]);

  return repository ? (
    <FlatList
      data={reviews}
      keyExtractor={(item) => `${item.id}`}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} single />
          <ItemSeparator />
        </>
      )}
      renderItem={({ item }) => (
        <ReviewInfo item={item} title={item.user.username} />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
    />
  ) : null;
};

export default Repository;
