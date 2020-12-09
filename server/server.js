const http = require("http");
const app = require("./express");
const server = http.createServer(app);
app.set("port", 5000);
server.listen(5000);
