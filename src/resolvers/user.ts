import { User } from "../types/types";
import pool from "../database/db";

export const users = async (): Promise<User[]> => {
    const result = await pool.query(`SELECT * FROM "user"`);
    return result.rows;
}

export const user = async (_: any, args: { id: number }): Promise<User | null> => {
    const result = await pool.query(`SELECT * FROM "user" WHERE id = $1`, [args.id]);
    return result.rows[0] || null;
}


// Lägg till fler mutationer för User
export const createUser = async (_: any, args: { name: string; email: string }): Promise<User> => {
    const result = await pool.query(
        `INSERT INTO "user"(name, email) VALUES($1, $2) RETURNING *`,
        [args.name, args.email]
    );
    return result.rows[0];
}

export const updateUser = async (_: any, args: { id: string, name: string; email: string }): Promise<User> => {
    const result = await pool.query(
        `UPDATE "user" SET name = $2, email = $3 WHERE id = $1`, [args.id, args.name, args.email]
    );
    return result.rows[0];
}

export const deleteUser = async (_: any, args: { id: string }): Promise<User> => {
    const result = await pool.query(
        `DELETE FROM "user" WHERE id = $1`, [args.id]
    );
    return result.rows[0];
}
