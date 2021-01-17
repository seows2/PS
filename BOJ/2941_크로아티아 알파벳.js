/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
*/

const input = "c=c=";

function solution(word) {
  const wordLength = word.length;
  let answer = 0;
  for (let i = 0; i < wordLength; i++) {
    const sliceWord3 = word.slice(i, i + 3);
    const sliceWord2 = word.slice(i, i + 2);
    if (sliceWord3 === "dz=") {
      answer++;
      i += 2;
    } else if (
      sliceWord2 === "c=" ||
      sliceWord2 === "c-" ||
      sliceWord2 === "d-" ||
      sliceWord2 === "lj" ||
      sliceWord2 === "nj" ||
      sliceWord2 === "s=" ||
      sliceWord2 === "z="
    ) {
      answer++;
      i++;
    } else {
      answer++;
    }
  }
  console.log(answer);
}

solution(input);
