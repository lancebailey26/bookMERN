import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_BOOK = gql`
mutation addBook($userId: ID!, $book: String!) {
  addBook(userId: $userId, book: $book) {
    _id
    username
    savedBooks
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($book: String!) {
  removeBook(book: $book) {
    _id
    username
    savedBooks
  }
}
`;