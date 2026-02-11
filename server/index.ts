import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());
// SEO Sitemap Route
app.get("/sitemap.xml", (req, res) => {
  res.setHeader("Content-Type", "application/xml");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.microtone.info/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  res.status(200).send(sitemap);
});


(async () => {
  await registerRoutes(server, app);

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
