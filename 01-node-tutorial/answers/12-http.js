const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
      Hello Server! :) 
      `);
  } else if (req.url === "/about") {
    res.end(`
      About Page 
      `);
  } else {
    res.end(`
      404 - page not found :( 
      `);
  }
});

server.listen(3000);
