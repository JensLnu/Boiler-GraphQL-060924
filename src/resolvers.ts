import { Pool } from "pg";
import { User } from "./types/types";

const createResolvers = (pool: Pool) => ({
  Query: {
    users: async (): Promise<User[]> => {
      const result = await pool.query("SELECT * FROM users");
      return result.rows;
    },
    user: async (_: any, args: { id: number }): Promise<User | null> => {
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [
        args.id,
      ]);
      return result.rows[0] || null;
    },
    // Lägg till fler queries för Post
  },
  Mutation: {
    createUser: async (
      _: any,
      args: { name: string; email: string }
    ): Promise<User> => {
      const result = await pool.query(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
        [args.name, args.email]
      );
      return result.rows[0];
    },
    // Lägg till fler mutationer för User och Post
  },
  // Lägg till relationer med parent här
});

export default createResolvers;
