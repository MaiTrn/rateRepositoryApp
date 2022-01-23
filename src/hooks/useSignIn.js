import { useMutation, useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [authorizeUser, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await authorizeUser({
        variables: { username, password },
      });
      if (data?.authorize) {
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return [signIn, result];
};

export default useSignIn;
