import { Post } from "../types/types";
import pool from "../database/db";

// Read function
export const posts = async (): Promise<Post[]> => {
    const result = await pool.query("SELECT * FROM post"); // Changed from posts to post
    return result.rows;
};

export const post = async (_: any, args: { id: number }): Promise<Post | null> => {
    const result = await pool.query("SELECT * FROM post WHERE id = $1", [args.id]); // Changed from posts to post
    return result.rows[0] || null;
};

// Create a post
export const createPost = async (_: any, args: { post: { title: string; content: string }}): Promise<Post> => {
    const result = await pool.query(
      "INSERT INTO post(title, content) VALUES($1, $2) RETURNING *",
      [args.post.title, args.post.content]
    );
    return result.rows[0];
};

// Update a post
export const updatePost = async (_: any, args: { id: number, post: { title: string; content: string }}): Promise<Post> => {
    const result = await pool.query(
        "UPDATE post SET title = $1, content = $2 WHERE id = $3 RETURNING *",
        [args.post.title, args.post.content, args.id]
    );
    return result.rows[0];
};

// Delete a post
export const deletePost = async (_: any, args: { id: number }): Promise<boolean> => {
    await pool.query("DELETE FROM post WHERE id = $1", [args.id]);
    return true;
};