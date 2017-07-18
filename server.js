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
const GET = 'get'
const SET = 'set'
const STATUS_CODE_200 = 200
const STATUS_CODE_404 = 404

// Save in memory
let arrayOfKeyValues = []


server.on('request', (request, response) => {

  const { url, method } = request;

  // Get info we need
  const methodType = url.substr(1, 3);
  const keyValuePairing = url.match(/[^\?]\w+=\w+/g)
  const keyValueSplit = keyValuePairing[0].split('=')

  let keyValueJson = {}
  keyValueJson[keyValueSplit[0]] = keyValueSplit[1]
  keyValueJson = JSON.stringify(keyValueJson)


  if(request.method === GET) {
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


        if(methodType === GET) {
          response.write('You are looking up X')
          // response.write(JSON.stringify(responseBody));
  
        } else if(methodType === SET) {
          arrayOfKeyValues.push(keyValueJson)
          response.write('Such and such has been set! Here is the full thingy')
          // response.write(JSON.stringify(responseBody));
        }

        // Stuff
        response.end();
      })

    } else {
      response.statusCode = STATUS_CODE_404
      response.end();
    }
});