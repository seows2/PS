/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
*/

const input = "734 893";

function solution(nums) {
  const [A, B] = nums;
  const reA = Number([...A].reverse().join(""));
  const reB = Number([...B].reverse().join(""));

  if (reA > reB) console.log(reA);
  else console.log(reB);
}

solution(input.split(" "));
