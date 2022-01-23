import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repository {
      id
      fullName
    }
    user {
      id
      username
    }
  }
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;

export const PAGE_INFO = gql`
  fragment PageDetails on PageInfo {
    endCursor
    startCursor
    hasNextPage
  }
`;
