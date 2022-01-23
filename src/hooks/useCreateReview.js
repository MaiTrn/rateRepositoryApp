import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [createreview, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, text, rating }) => {
    try {
      const { data } = await createreview({
        variables: {
          ownerName,
          repositoryName,
          text,
          rating: Math.floor(rating),
        },
      });

      return data.createReview;
    } catch (e) {
      console.log(e);
    }
  };
  return [createReview, result];
};

export default useCreateReview;
