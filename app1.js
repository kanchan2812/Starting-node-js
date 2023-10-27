const http = require('http');

const server=http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>Hello from my node.js server!</h1></body>');
res.write('</html>');
res.end();
});

const port = 6000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
