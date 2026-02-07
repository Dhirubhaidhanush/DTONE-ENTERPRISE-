import type { Express } from "express";
import type { Server } from "http";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function registerRoutes(
  _server: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO contacts (name, phone, email, message)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [name, phone, email, message]
      );

      console.log("✅ INSERTED:", result.rows[0]);
      res.json({ success: true });
    } catch (err) {
      console.error("❌ DB ERROR:", err);
      res.status(500).json({ error: "Insert failed" });
    }
  });

  return _server;
}
