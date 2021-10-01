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

type Query {
  users: [user]!
  user(userId: ID!): user
  me: user
}

type Mutation {
  addProfile(username: String!, email: String!, password: String!):
  login(email: String!, password: String!):
  addBook(userId: ID!, title: String): user
  removeBook(title: String!): user
}
`;

module.exports = typeDefs;
