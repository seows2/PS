/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = ["1", "1000 1000 -1000 -1000", "1", "0 0 1000"];

function solution(input) {
  const T = input.shift();
  const answer = [];

  for (let i = 0; i < T; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    const N = input.shift();
    const planetInfo = input
      .splice(0, N)
      .map((info) => info.split(" ").map(Number));
    let count = 0;

    for (const [cx, cy, r] of planetInfo) {
      const distance1 = (cx - x1) ** 2 + (cy - y1) ** 2;
      const f1 = distance1 < r ** 2;
      const distance2 = (cx - x2) ** 2 + (cy - y2) ** 2;
      const f2 = distance2 < r ** 2;

      if ((f1 && !f2) || (!f1 && f2)) ++count;
    }
    answer.push(count);
  }
  console.log(answer.join("\n"));
}

solution(input);
