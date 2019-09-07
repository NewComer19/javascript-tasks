module.exports = function (input) {
  if(typeof input != "string") {
     console.log("This is not a string")
     return false;
  } else {
    return true;
  }
}
