import http from "http";
import * as cheerio from "cheerio";

const TARGET_URL = "https://elpais.com";

async function scrapeWebsite() {
  try {
    const response = await fetch(TARGET_URL); 
    const html = await response.text();
    const $ = cheerio.load(html);
    const title = $("title").text();

    const result = {
      timestamp: new Date().toLocaleString(),
      title,
    };

    console.log(`[${result.timestamp}] Título encontrado: ${result.title}`);
    return result;
  } catch (err) {
    console.error("❌ Error durante el scraping:", err.message);
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const data = await scrapeWebsite();
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(data, null, 2));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

setInterval(scrapeWebsite, 300000);
