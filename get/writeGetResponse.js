module.exports = (response, key, arrayOfKeyValues) => {
  if(arrayOfKeyValues.length === 0) {
    response.write(`There are currently no entries in the database.`);
  } else {

    let keyValuePairParsed;
    let foundValues = [];

    arrayOfKeyValues.some((keyValuePair) => { 
      keyValuePairParsed = JSON.parse(keyValuePair);

      if(Object.keys(keyValuePairParsed)[0] === key) {
        foundValues.push(keyValuePairParsed);
      }
    });

    if(foundValues.length === 1) {
      response.write(`The value associated with that key \"${key}\" is ${JSON.stringify(foundValues[0][key])}`);
    } else if(foundValues.length > 1) {
      response.write(`There are ${foundValues.length} values associated with the key "${key}". <br />`);
      response.write(`Those values are: ${JSON.stringify(foundValues)}.`);
    } else {
      response.write(`There are no entries associated with that key.`);
    }
  }

}