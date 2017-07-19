module.exports = (url) => {

  const keyValuePairing = url.match(/(\w*=\w*)/g);
  const keyValueSplit = keyValuePairing[0].split('=');
  
  let keyValueJson = {};
  keyValueJson[keyValueSplit[0]] = keyValueSplit[1];
  keyValueJson = JSON.stringify(keyValueJson);
  
  return keyValueJson;
}