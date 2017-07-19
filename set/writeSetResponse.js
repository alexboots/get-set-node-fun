module.exports = (response, keyValueJson, arrayOfKeyValues) => {
  response.write(`Saving new entry: ${keyValueJson} <br /><br />`)
  response.write(`The database has been updated to include this new entry:\n ${arrayOfKeyValues}`)
}