/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
*/

const input = "UNUCIC";

function solution(word) {
  const dialArr = [...word];
  let answer = 0;
  for (const dial of dialArr) {
    if (dial === "A" || dial === "B" || dial === "C") {
      answer += 3;
    } else if (dial === "D" || dial === "E" || dial === "F") {
      answer += 4;
    } else if (dial === "G" || dial === "H" || dial === "I") {
      answer += 5;
    } else if (dial === "J" || dial === "K" || dial === "L") {
      answer += 6;
    } else if (dial === "M" || dial === "N" || dial === "O") {
      answer += 7;
    } else if (dial === "P" || dial === "Q" || dial === "R" || dial === "S") {
      answer += 8;
    } else if (dial === "T" || dial === "U" || dial === "V") {
      answer += 9;
    } else {
      answer += 10;
    }
  }
  console.log(answer);
}

solution(input);
