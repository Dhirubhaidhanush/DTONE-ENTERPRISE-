import type { Express } from "express";
import type { Server } from "http";
import { Pool } from "pg";

/* DEBUG: confirm env is loaded */
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

/* PostgreSQL connection */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/* DEBUG: test DB connection */
(async () => {
  try {
    const res = await pool.query("SELECT current_database()");
    console.log("✅ Connected to DB:", res.rows[0].current_database);
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
})();

export async function registerRoutes(
  _server: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    console.log("📩 /api/contact HIT");
    console.log("BODY:", req.body);

    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const result = await pool.query(
        `INSERT INTO contacts (name, phone, email, message)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [name, phone, email, message]
      );

      console.log("✅ INSERTED:", result.rows[0]);
      res.json({ success: true, data: result.rows[0] });
    } catch (err) {
      console.error("❌ INSERT FAILED:", err);
      res.status(500).json({ error: "Insert failed" });
    }
  });

  return _server;
}



//OLD REPLIT CODE
// import type { Express } from "express";
// import { createServer, type Server } from "http";
// import { storage } from "./storage";

// export async function registerRoutes(
//   httpServer: Server,
//   app: Express
// ): Promise<Server> {
//   // put application routes here
//   // prefix all routes with /api

//   // use storage to perform CRUD operations on the storage interface
//   // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

//   return httpServer;
// }
