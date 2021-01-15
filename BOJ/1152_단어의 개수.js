/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
*/

const input = " ";

function solution(word) {
  if (word === "" || word === " ") console.log(0);
  else console.log(word.trim().split(" ").length);
}

solution(input);
