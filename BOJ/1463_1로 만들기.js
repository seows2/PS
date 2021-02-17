/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "10";

function solution(input) {
  let dp = new Array(input + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < input; i++) {
    let three = Infinity;
    let two = Infinity;
    let basic = Infinity;
    if (i % 3 === 0) {
      three = 1 + dp[i / 3];
    }
    if (i % 2 === 0) {
      two = 1 + dp[i / 2];
    }
    basic = 1 + dp[i - 1];
    dp[i] = Math.min(three, two, basic);
    console.log(i, three, two, basic, dp[i]);
  }
  console.log(dp);
  console.log(dp[input - 1]);
}

solution(Number(input));
