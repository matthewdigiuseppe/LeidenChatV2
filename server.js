const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

console.log(`Attempting to run on PORT: ${port}`); // Add this line for debugging

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) {
      console.error("Failed to bind to port:", err);
      throw err;
    }
    console.log(`> Ready on http://0.0.0.0:${port}`);
  });
});