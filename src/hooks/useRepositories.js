import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  // const fetchRepositories = async () => {
  //   setLoading(true);
  //   // Replace the IP address part with your own IP address!
  //   const response = await fetch("http://192.168.0.146:5000/api/repositories");
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
