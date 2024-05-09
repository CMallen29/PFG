import { sql } from "@vercel/postgres";

export async function getUserByUsername(username: string) {
  try {
    const user = await sql`SELECT 
                email,
                username,
                name,
                avatar_path,
                save_pokemon 
                FROM users WHERE username=${username}`;

    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'+user);
    console.log('aqui');
    
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
