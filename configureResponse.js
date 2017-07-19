// Consts
const consts = require('./constants.js');

exports.startOfResponse = (response) => {
  response.statusCode = consts.STATUS_CODE_200;
  response.setHeader('Content-Type', 'text/html');
  response.write("<div style='font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;'>");
}

exports.endOfResponse = (response) => {
  response.write("</div>");
  response.end();
}