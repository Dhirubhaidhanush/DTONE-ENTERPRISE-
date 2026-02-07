import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());

(async () => {
  await registerRoutes(server, app);

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
