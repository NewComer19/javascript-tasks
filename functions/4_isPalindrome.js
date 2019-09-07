/*
  Task:
 Define a function is_palindrome() that recognizes palindromes (i.e. words that look the same written backwards). For example, is_palindrome("radar") should return True.
*/

var check = require('./Helpers/checkIfString.js');

console.log(isPalindrome("radar"))

function isPalindrome(str) {
  if(!check(str)) return;

  let reversedString = "";
  for(let i = str.length; i >= 0; i--) {
    reversedString += str.charAt(i);
  }

  if(str == reversedString) {
    return true;
  }
  else {
    return false;
  }
}
