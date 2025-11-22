

import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

(async () => {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("Database connected:", result[0].now);
  } catch (err) {
    console.error("Database error:", err);
  }
})();

export default sql;
