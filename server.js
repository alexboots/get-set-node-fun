const http = require('http');

const server = http.createServer().listen(4000, '127.0.0.1');


let body = []
server.on('request', (request, response) => {
  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];

  request
    .on('error', (error) => {
      console.log('Oh no! Something went wrong!\n');
      console.error(error.stack)
    })
    .on('data', (chunk) => {
      body.push(chunk);
      console.log("chunk", chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('body', body);
    })
  
});