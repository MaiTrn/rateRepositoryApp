import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolity: "cache-and-network",
  });

  // const fetchRepositories = async () => {
  //   setLoading(true);
  //   // Replace the IP address part with your own IP address!
  //   const response = await fetch("http://192.168.0.146:5000/api/repositories");
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  useEffect(() => {
    setLoading(result.loading);
    if (result.data) {
      setRepositories(result.data.repositories);
    }
  }, [result.data]);

  return { repositories, loading };
};

export default useRepositories;
