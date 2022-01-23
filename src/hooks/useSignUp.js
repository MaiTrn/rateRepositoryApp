import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [newUser, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
    try {
      const { data } = await newUser({ variables: { username, password } });

      if (data) {
        await signIn({ username, password });
      }
      return data.createUser;
    } catch (e) {
      console.log(e);
    }
  };

  return [signUp, result];
};

export default useSignUp;
