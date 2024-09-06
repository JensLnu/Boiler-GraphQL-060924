// Lägg till fler fält om behövs
// Definiera fler mutationer och typer
export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!] # Assuming a user has multiple posts
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    users: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createUser(user: UserInput!): User
    createPost(post: PostInput!): Post
    updatePost(id: ID!, post: PostInput!): Post
    deletePost(id: ID!): Boolean
    updateUser(edit: UserInput!, id:ID! ): User
    deleteUser(id:ID!): User
  }

  input UserInput {
    name: String!
    email: String!
  }

  input PostInput {
    title: String!
    content: String!
  }
`;

