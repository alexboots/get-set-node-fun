module.exports = (url) => {
  let key = url.match(/[^\?]\w+$/g)[0];
  return key;
}