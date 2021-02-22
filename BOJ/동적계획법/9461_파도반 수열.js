/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["2", "6", "12"].map((e) => Number(e));
input.shift();
function solution(t) {
  let dp = new Array(101).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= 101; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }
  t.forEach((i) => {
    console.log(dp[i]);
  });
}

solution(input);
