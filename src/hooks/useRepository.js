import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const [getRepository, { data, fetchMore, loading, ...result }] = useLazyQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const fetchRepository = async () => {
    try {
      await getRepository({
        variables,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  return {
    repository: data ? data.repository : undefined,
    fetchRepository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;
