/*
  Task:
  Write a ship battle game, which is similar to ex.8, except it takes 1 integer as an order of matrix, randomly generates index (x, y) and checks user input (2 integers).
  (tip: use var1, var2 = raw_input("Enter two numbers here: ").split())
*/

//note that first time ceating matrix it can be an error that will disappear in further laucnhes with SAME size
var getNumberBetween = require('./Helpers/getRandNumberBetween.js')
var readlineSync = require('readline-sync');

var battlefield = [];
var winningAnswer = [];

main();

function main() {
  var size = readlineSync.question('Input matrix size ');
  size = parseInt(size, 10);

  let columnOfShip = getNumberBetween(0,size);
  let rowOfShip = getNumberBetween(0,size);
  winningAnswer.push(columnOfShip);
  winningAnswer.push(rowOfShip);

  generateMatrixWithGivenSize(size);
  battlefield[columnOfShip][rowOfShip] = 1;
  play(size);
}

function generateMatrixWithGivenSize(size) {
  for(let i = 0; i < size; i++) {
    battlefield.push([]);
  }
  for(let i = 0; i < size; i++) {
    for(let y = 0; y < size; y++) {
        battlefield[i].push(0);
    }
  }
}

function play(size) {

  while(true) {
    var x = readlineSync.question('Please input x coordinate of strike ');

    if(x < 0 || x > size) console.log("x coordinate is incorrect");

    var y = readlineSync.question('Please input y coordinate of strike ');

    if(y < 0 || y > size) console.log("y coordinate is incorrect");

    if(x == winningAnswer[0] + 1 && y == winningAnswer[1] + 1) {
      break;
    }
    console.log(x + " " + y + "||" + winningAnswer[0] + " " +  winningAnswer[1])

    if(x >= 0 && x <= size && y >= 0 && y <= size) {
      battlefield[x-1][y-1] = 2;
    }
    console.log("Try again");
    console.log(battlefield);

  }
  console.log("Congratulations");
}
