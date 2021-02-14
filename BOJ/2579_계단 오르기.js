/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "10", "20", "30"].map((e) => Number(e));
const n = input.shift();
function solution(n, input) {
  let dp = new Array(n).fill(0);
  dp[0] = input[0];
  dp[1] = Math.max(input[0] + input[1], input[1]);
  dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], input[i - 1] + input[i] + dp[i - 3]);
  }
  console.log(dp[n - 1]);
}

solution(n, input);
