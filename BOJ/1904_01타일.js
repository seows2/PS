/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "4";

function solution(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
  }
  console.log(dp);
  return dp[n];
}

solution(Number(input));
