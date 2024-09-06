// Lägg till fler fält om behövs
// Definiera fler mutationer och typer
export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts:[Post!]
  }
  type Post {
    id: ID!
    title: String!
    content: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    createUser(user: UserInput!): User
  }
  input UserInput {
    name: String!
    email: String!
  }
`;
