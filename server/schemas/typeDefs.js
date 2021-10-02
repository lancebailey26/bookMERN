const { gql } = require('apollo-server-express');

const typeDefs = gql`
type book {
   authors: [String]
   description: String!
   bookId: String!
   image: String
   link: String
   title: String!
}

 type user {
   _id: ID!
   username: String!
   email: String!
   savedBooks: [book]
}
type Auth {
  token: ID!
  user: user
}
type Query {
  users: [user]!
  user(userId: ID!): user
  me: user
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addBook(userId: ID!, title: String): user
  removeBook(title: String!): user
}
`;

module.exports = typeDefs;
