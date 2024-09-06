import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs/schema.js";
import createResolvers from "./resolvers/resolvers.js";
import pool from "./database/db.js";

const resolvers = createResolvers(pool);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
