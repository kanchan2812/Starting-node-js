const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Your Name: kanchan");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Your Name: kanhan');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
