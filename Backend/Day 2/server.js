// server.mjs
// import { createServer } from 'node:http';

const http = require("http");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(req.url, req.method);
  if (req.url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>WELCOME TO HOME PAGE</h1>
</body>
</html>
        `);

        return res.end();
  }else if (req.url == "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>product</title>
</head>
<body>
    <h1>WELCOME TO PRODUCT PAGE</h1>
</body>
</html>
        `);

        return res.end();
  }


  res.end('Hello world');
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`



// 4 route  - Home , contact , about , service
// 1 image or kuch para
// contact - form 