// Lägg till fler mutationer för Post

import { Post } from "../types/types";
import pool from "../database/db";

// Read function
export const posts = async (): Promise<Post[]> => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

export const post = async (_: any, args: { id: number }): Promise<Post | null> => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [args.id]);
    return result.rows[0] || null;
};

// Create a post
export const createPost = async (_: any, args: { post: { title: string; content: string }}): Promise<Post> => {
    const result = await pool.query(
      "INSERT INTO posts(title, content) VALUES($1, $2) RETURNING *",
      [args.post.title, args.post.content]
    );
    return result.rows[0];
};

// Update a post
export const updatePost = async (_: any, args: { id: number, post: { title: string; content: string }}): Promise<Post> => {
    const result = await pool.query(
        "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
        [args.post.title, args.post.content, args.id]
    );
    return result.rows[0];
};

// Delete a post
export const deletePost = async (_: any, args: { id: number }): Promise<boolean> => {
    await pool.query("DELETE FROM posts WHERE id = $1", [args.id]);
    return true;
};