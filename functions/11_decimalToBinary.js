/*
  Task:
  Write a function dec_to_bin() that taces decimal integer and outputs its binary representation.
*/

console.log(decimalToBinary(19));

function decimalToBinary(number) {
  let binary = "";

  while(number > 0) {
    if(number % 2 != 0) {
      binary += 1;
    } else {
      binary += 0;
    }
    number /= 2;
    number = Math.floor(number);
  }

  return binary.split("").reverse().join("");
}
