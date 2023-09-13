import HLSServer from "hls-server";
import http from "http";
import fs from "fs";

const html = fs.readFileSync("index.html", "utf-8");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.write(html);
  res.end();
});
const hls = new HLSServer(server, {
  path: "/streams",
  dir: "source-m3u8",
});

server.listen(8000);
