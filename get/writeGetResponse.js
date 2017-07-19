module.exports = (response, key, arrayOfKeyValues) => {

  if(arrayOfKeyValues.length === 0) {
    response.write(`There are currently no entries in the database.`)
  } else {

    let count = 0;
    let keyValuePairParsed;
    let foundValues = [];

    arrayOfKeyValues.some((keyValuePair) => { 
      keyValuePairParsed = JSON.parse(keyValuePair)

      if(Object.keys(keyValuePairParsed)[0] === key) {
        foundValues.push(keyValuePairParsed)
        count++;
      }
    });

    if(foundValues.length === 1) {
      response.write(`The value associated with that key is ${JSON.stringify(keyValuePairParsed)}`);
    } else if(count > 1) {
      response.write(`There are ${count} values associated with the key "${key}". <br />`);
      response.write(`Those values are: ${JSON.stringify(foundValues)}.`);
    } else {
      response.write(`There are no entries associated with that key.`)
    }
  }

}