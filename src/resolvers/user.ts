import { User } from "../types/types";
import pool from "../database/db";

export const users = async (): Promise<User[]> => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}

export const user = async (_: any, args: { id: number }): Promise<User | null> => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [args.id,]);
    return result.rows[0] || null;
}


// Lägg till fler mutationer för User och Post
export const createUser = async (_: any, args: { name: string; email: string }): Promise<User> => {
    const result = await pool.query(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
        [args.name, args.email]
    );
    return result.rows[0];
}




// export const authors = async (): Promise<Author[]> => {
//     try {
//         const result = await pool.query<Author>("SELECT * FROM authors");
//         return result.rows;
//     } catch (error) {
//         console.error("Error fetching authors:", error);
//         throw new Error("Error fetching authors");
//     }
// };

// export const author = async(
//   : any,
//     args: { id: string }
// ): Promise<Author | undefined> => {
//     const id = parseInt(args.id, 10);

//     if (isNaN(id)) {
//         throw new Error("Invalid ID provided. It must be an integer.");
//     }

//     try {
//         const result = await pool.query<Author>(
//             "SELECT * FROM authors WHERE id = $1",
//             [id]
//         );
//         return result.rows[0];
//     } catch (error) {
//         console.error("Error fetching author:", error);
//         throw new Error("Error fetching author");
//     }
// };