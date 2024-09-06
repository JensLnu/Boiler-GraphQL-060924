import {
  users,
  user,
  createUser,
  updateUser,
  deleteUser,
} from "./user";

const createResolvers = {
  Query: {
    // User
    users,
    user,

    // Post
    // posts,
    // post,
  },
  Mutation: {
    // User
    createUser,
    updateUser,
    deleteUser,

    // Post
    // createPost,
    // updatePost,
    // deletePost
  },
  // Lägg till relationer med parent här
};

export default createResolvers;
