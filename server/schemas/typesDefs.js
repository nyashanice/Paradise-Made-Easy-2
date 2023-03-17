const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    posts: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentBody: String
    commentAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]!
    user(name: String!): User
    posts(name: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
