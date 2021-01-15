/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/
const input = "baekjoon";

function solution(word) {
  const alphahbet = [..."abcdefghijklmnopqrstuvwxyz"];
  let answer = Array(26).fill(-1);
  const wordArr = [...word];
  wordArr.forEach((al, wordIndex) => {
    const index = alphahbet.indexOf(al);
    if (answer[index] === -1) {
      answer[index] = wordIndex;
    }
  });
  console.log(...answer);
}

solution(input);
