'use strict';

const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, resp) {
  const text = fs.readFileSync("static/index.html", 'utf-8');
  resp.write(text);
  resp.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
