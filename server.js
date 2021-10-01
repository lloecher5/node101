const http = require("http"); //stores the http module in the variable 'http'

function random() {
  return Math.floor(Math.random() * 255);
}
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
  res.end("<h1>Hello World: " + random() + "</h1>");
});

console.log("starting server");

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is now listening on http://127.0.0.1:3000");
});
