// Constants
const GET = 'get'
const SET = 'set'
const STATUS_CODE_200 = 200

// Array to use as database
let arrayOfKeyValues = []

module.exports = (response, methodType, keyValueJson) => {

  response.statusCode = STATUS_CODE_200;
  response.setHeader('Content-Type', 'text/html');

  response.write("<div style='font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;'>");

  if(methodType === GET) {
    console.log('keyValueJson', keyValueJson);
    response.write('You are looking up X')
  

  } else if(methodType === SET) {
    arrayOfKeyValues.push(keyValueJson)
    response.write(`Saving new entry: ${keyValueJson} <br /><br />`)
    response.write(`The database has been updated to include this new entry:\n ${arrayOfKeyValues}`)
  }

  response.write("</div>")
};