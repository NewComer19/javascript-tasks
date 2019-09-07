/*
  Task:
  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in a list of numbers.
  For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.
*/

const check  = require('./Helpers/checkIfArray.js');

var arrayOfNumbers = [2, 3, 4];

console.log("Array: " + arrayOfNumbers)
console.log("Multiplication: " + multiply(arrayOfNumbers));
console.log("Sum:" + sum(arrayOfNumbers));

function multiply(input) {
  if (!check(input)) return;
  let result = 1;
  input.forEach((val) => {
    result *= val;
  })

  return result;
}

function sum(input){
    if (!check(input)) return;
    let result = 0;
    input.forEach((val) => {
      result += val;
    })

    return result;
}
