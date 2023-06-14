import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuates {
    quates {
      name
      by {
        _id
        firstName
      }
    }
  }
`;
