/*
  Task:
Write a function game() number-guessing game, that takes 2 int parameters defining the range. Using Math.random() generate random int from the range. While user input isn't equal that number, print "Try again!".
 If user guess the number, congratulate him and exit.
*/
var getNumberBetween = require('./Helpers/getRandNumberBetween.js')
const readline = require('readline');
var winningAnswer = 0;
const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });
guessNumber(0, 10);

function guessNumber(minValue, maxValue) {
  let winNumber = getNumberBetween(minValue, maxValue);
  winningAnswer = winNumber;
  searchPrompt();
};

function searchPrompt() {
  rl.question('Please input ', input => {
    input = parseInt(input, 10)
    if( input == winningAnswer ) {
      console.log("Congratulations")
      return rl.close();
    }
    console.log("Try again");
    searchPrompt();
  });
}
