import {
  users,
  user,
  createUser,
  updateUser,
  deleteUser,
} from "./user";
import {posts, post, createPost, updatePost, deletePost } from "./post"

const createResolvers = {
  Query: {
    // User
    users,
    user,
    posts,
    post,

    // Post
    // posts,
    // post,
  },
  Mutation: {
    // User
    createUser,
    createPost,
    updatePost,
    deletePost,
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
