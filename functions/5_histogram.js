/*
  Task:
  Define a procedure histogram() that takes a list of integers and prints a histogram to the screen. For example, histogram([4, 9, 7]) should print the following:
 ****
 *********
 ******
 (usage time.sleep(s) possible for better visualization)
*/

const check  = require('./Helpers/checkIfArray.js');

histogram([6, 3, 4]);

function histogram(array) {
  if(!check(array)) return;

  array.forEach(val => {
    let result = "";
    for(let i = 0; i < val; i++) {
      result += "*"
    }
    console.log(result);
  })
}
