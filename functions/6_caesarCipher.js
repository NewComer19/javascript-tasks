/*
  Task:
Define a function caesar_cipher that takes string and key(number), whuch returns encrypted string
*/

const alphabet = require("./Helpers/alphabet.js")

let stringForEncryption = "Hello";

console.log(encrypt(stringForEncryption, "b"));

function encrypt(str, keyLetter) {
  if(typeof str !== "string" || typeof keyLetter !== "string") {
    return null;
  } else {
    let key = alphabet.indexOf(keyLetter);
    let string = str.toLowerCase();
    let encryptedString = "";
    for(let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      let newChar = (alphabet.indexOf(char) + key) % alphabet.length;
      encryptedString += alphabet[newChar]
    }
      return encryptedString;
  }
}
