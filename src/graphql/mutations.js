import { gql } from "@apollo/client";
import { REVIEW_DETAILS, USER_DETAILS } from "./fragments";

export const SIGN_IN = gql`
  mutation authorizeUser($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
      expiresAt
    }
  }
`;

export const CREATE_USER = gql`
  mutation newUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $ownerName: String!
    $repositoryName: String!
    $rating: Int!
    $text: String!
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        repositoryName: $repositoryName
        rating: $rating
        text: $text
      }
    ) {
      ...ReviewDetails
      repositoryId
    }
  }
  ${REVIEW_DETAILS}
`;

export const DELETE_REVIEW = gql`
  mutation removeReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
