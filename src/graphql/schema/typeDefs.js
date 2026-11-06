export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    userId: User!
    likes: Int!
    createdAt: String
  }

  type Query {
    hello: String!
    getAllPosts: [Post!]!
    getPostById(id: ID!): Post
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, userId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
