/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = ["2", "3 ABC", "5 /HTP"];

input.shift();

function solution(input) {
  let answer = [];
  let temp = "";
  for (const words of input) {
    const [repeat, word] = words.split(" ");
    [...word].forEach((e) => {
      const repeatWord = e.repeat(repeat);
      temp += repeatWord;
    });
    answer.push(temp);
    temp = "";
  }
  console.log(answer.join("\n"));
}

solution(input);
