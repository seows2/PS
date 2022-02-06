/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
  "3 4",
  "ohhenrie",
  "charlie",
  "baesangwook",
  "obama",
  "baesangwook",
  "ohhenrie",
  "clinton",
];

function solution(input) {
  const answer = [];
  const [N, M] = input.shift().split(" ").map(Number);
  const hasntHeardOnes = new Set(input.splice(0, N));
  const hasntSeenOnes = new Set(input.splice(0, M));

  hasntHeardOnes.forEach((someone) => {
    hasntSeenOnes.has(someone) && answer.push(someone);
  });

  answer.sort((a, b) => a.localeCompare(b)).unshift(answer.length);

  console.log(answer.join("\n"));
}

solution(input);
