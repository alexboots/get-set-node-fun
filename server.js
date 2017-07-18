const http = require('http');
const server = http.createServer().listen(4000, '127.0.0.1');

const STATUS_CODE_200 = 200
const STATUS_CODE_404 = 404
const GET = 'GET'


server.on('request', (request, response) => {

  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];


  if(request.method === GET && request.url === '/hello') {
    
    let body = []
    request
      .on('error', (error) => {
        console.log('Oh no! Something went wrong!', error.stack);
      })
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        
        response.on('error', (error) => { console.error('Error responding to your requesty', error); })

        response.statusCode = STATUS_CODE_200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url, body };
        response.write(JSON.stringify(responseBody));
        response.end();
      })

    } else {
      response.statusCode = STATUS_CODE_404
      response.end();
    }
});