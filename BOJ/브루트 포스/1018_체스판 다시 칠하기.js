/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
  "10 13",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "WWWWWWWWWWBWB",
  "WWWWWWWWWWBWB",
];

const num = input
  .shift()
  .split(" ")
  .map((e) => Number(e));

function solution(num, board) {
  const [N, M] = num;
  let min = Infinity;

  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      let Bcnt = 0;
      let Wcnt = 0;
      for (let col = i; col < i + 8; col++) {
        for (let row = j; row < j + 8; row++) {
          if ((col + row) % 2 === 0) {
            if (board[col][row] === "B") {
              Wcnt++;
            } else {
              Bcnt++;
            }
          } else {
            if (board[col][row] === "B") {
              Bcnt++;
            } else {
              Wcnt++;
            }
          }
        }
      }
      let tempMin = Bcnt > Wcnt ? Wcnt : Bcnt;
      min = tempMin > min ? min : tempMin;
    }
  }
  return min;
}
console.log(solution(num, input));
