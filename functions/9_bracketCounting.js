/*
  Task:
  Define a function, which takes a string with N opening brackets ("[") and N closing brackets ("]"), in some arbitrary order.
  Determine whether the generated string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.
  Examples:
     []        OK   ][        NOT OK
     [][]      OK   ][][      NOT OK
     [[][]]    OK   []][[]    NOT OK
*/


console.log(ifStringIsBalanced("[]][[]"))
console.log(ifStringIsBalanced("[[][]]"))

function ifStringIsBalanced(str) {
  let array = [];
  if(str.length % 2 != 0) {
    console.log("Odd number of symbols");
    return false;
  }

  if(str.charAt(0) == "]" || str.charAt(str.length) == "[") {
    console.log("Begins or ends with incorrect symbol");
    return false;
  } else {
    for(let i = 0; i < str.length; i ++) {
      if(str.charAt(i) == "[")
        array.push(str.charAt(i));
      else if (str.charAt(i) == "]")
        array.pop();
    }
  }
  if(array.length != 0) {
      console.log("Array is not emptied after check");
      return false;
  }
  else
    return true;
}
