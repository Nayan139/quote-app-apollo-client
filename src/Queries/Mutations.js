import { gql } from "@apollo/client";

export const SIGNUP_MUTATIONS = gql`
  mutation createUser($userNew: UserInput!) {
    response: signupUser(userNew: $userNew) {
      code
      status
      message
      User {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const SIGNIN_MUTATIONS = gql`
  mutation createUserSignin($signIn: SigninInput!) {
    user: signInUser(signIn: $signIn) {
      code
      status
      message
      Token
    }
  }
`;
