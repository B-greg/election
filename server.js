const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/pi.gregb.info/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/pi.gregb.info/cert.pem"),
};app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(8092, (err) => {
    if (err) throw err;
    console.log("> Server started on https://localhost:8092");
  });
});
