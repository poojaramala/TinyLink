
import sql from "../db/index.js";

export const createLink = async (code, original_url) => {
  const result = await sql`
    INSERT INTO links (code, original_url)
    VALUES (${code}, ${original_url})
    RETURNING *
  `;
  return result[0];
};

export const findLinkByCode = async (code) => {
  const result = await sql`
    SELECT * FROM links WHERE code = ${code}
  `;
  return result[0];
};

export const getAllLinks = async () => {
  const result = await sql`
    SELECT * FROM links ORDER BY created_at DESC
  `;
  return result;
};

export const deleteLink = async (code) => {
  await sql`
    DELETE FROM links WHERE code = ${code}
  `;
};

export const incrementClick = async (code) => {
  await sql`
    UPDATE links
    SET clicks = clicks + 1, last_clicked = NOW()
    WHERE code = ${code}
  `;
};
