module.exports = function (input) {
  if(!Array.isArray(input)) {
    console.log("Please make sure to pass array to function")
    return false;
  } else {
    return true;
  }
}
