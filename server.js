/*

Database server

[✔] Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. 
[] When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. 
[] When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.

During your interview, you will pair on saving the data to a file. 
You can start with simply appending each write to the file, and work on making it more efficient if you have time.

*/

const http = require('http');
const server = http.createServer().listen(4000, '127.0.0.1');

// Constants
const GET = 'GET'
const STATUS_CODE_200 = 200
const STATUS_CODE_404 = 404


server.on('request', (request, response) => {

  const { url } = request;

  url
  
  set?somekey=somevalue
  if() {
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



        console.log('url', url.);
        
        response.on('error', (error) => { console.error('Error responding to your requesty', error); })

        response.statusCode = STATUS_CODE_200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = {  url, body };

        // Stuff
        response.write(JSON.stringify(responseBody));
        response.end();
      })

    } else {
      response.statusCode = STATUS_CODE_404
      response.end();
    }
});