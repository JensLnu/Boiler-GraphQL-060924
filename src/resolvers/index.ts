import { users, user, createUser } from "./user";
import {posts, post, createPost, updatePost, deletePost } from "./post"

const createResolvers = {
  Query: {
    users,
    user,
    posts,
    post
  },
  Mutation: {
    createUser,
    createPost,
    updatePost,
    deletePost

  },
  // Lägg till relationer med parent här
};

export default createResolvers;
