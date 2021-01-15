/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()
*/
const input = "baaa";

function solution(word) {
  const lowerWord = [...word.toLowerCase()];
  const wordObj = {};
  let max = 0;
  let answer = "";
  for (const alphabet of lowerWord) {
    wordObj[alphabet] = wordObj[alphabet] ? wordObj[alphabet] + 1 : 1;
  }
  Object.entries(wordObj).forEach(([key, value]) => {
    if (max < value) {
      max = value;
      answer = key;
    } else if (max === value) {
      answer = "?";
    }
  });

  if (answer.match(/\w/)) {
    console.log(answer.toUpperCase());
  } else {
    console.log(answer);
  }
}

solution(input);
