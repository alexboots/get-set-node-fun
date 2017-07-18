const http = require('http');

const server = http.createServer().listen(4000, '127.0.0.1');

server.on('request', (request, response) => {
  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];
  
});