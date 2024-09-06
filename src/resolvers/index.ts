import { users, user, createUser } from "./user";

const createResolvers = {
  Query: {
    users,
    user
  },
  Mutation: {
    createUser,
  },
  // Lägg till relationer med parent här
};

export default createResolvers;
