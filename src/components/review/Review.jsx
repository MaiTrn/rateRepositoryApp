import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import useCreateReview from "../../hooks/useCreateReview";
import ReviewForm from "./ReviewForm";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name name is required"),
  rating: yup
    .number()
    .typeError("Not a valid number!")
    .min(0, "Too little!")
    .max(100, "Too large!")
    .required("Rating is required"),
  text: yup.string(),
});

const Review = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  const onSubmit = async (values) => {
    try {
      const data = await createReview(values);
      navigate(`/repository/${data.repositoryId}`);
    } catch (e) {
      setError(
        `GitHub repository ${values.repositoryName} created by ${values.ownerName} does not exist!`
      );
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <ReviewForm onSubmit={handleSubmit} error={error} />
        )}
      </Formik>
    </>
  );
};

export default Review;
