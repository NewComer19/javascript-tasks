/*
  Task:
  Write a function char_freq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Python dictionary.
  Try it with something like char_freq("abbabcbdbabdbdbabababcbcbab").
*/

const alphabet = require("./Helpers/alphabet.js")

//for better calculation recomended to pass as arg some book in .txt
calcMonogramFrequency("Hello world")

function calcMonogramFrequency(str) {
  str = str.toLowerCase();
  var dict = [];
  for(let i = 0; i < alphabet.length; i++) {
    let counter = 0;
    for(let y = 0; y < str.length; y++) {
      if(str.charAt(y) == alphabet[i])
        counter++;
    }
    let result = counter / str.length;
    dict.push({
      key: alphabet[i],
      value: result
    });
  }
  console.log(dict);
  return dict;
}
