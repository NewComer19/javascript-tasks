/*
  Task:
  Define a function reverse() that computes the reversal of a string. For example, reverse("I am testing") should return the string "gnitset ma I".
*/

var check = require('./Helpers/checkIfString.js');

reverse("Hello world")

function reverse(str) {
  if(!check(str)) return;
  let reversedString = "";
  for(let i = str.length; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  console.log(reversedString);
}
