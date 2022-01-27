import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = (variables) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(
    GET_AUTHORIZED_USER,
    { variables }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.authorizedUser.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    user: data ? data.authorizedUser : undefined,
    fetchMore: handleFetchMore,
    refetch,
    loading,
    ...result,
  };
};

export default useAuthorizedUser;
