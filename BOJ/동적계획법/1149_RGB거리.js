/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "26 40 83", "49 60 57", "13 89 99"];
const n = input.shift();

function solution(n, home) {
  let dp = Array.from({ length: n }, (_, i) => {
    return home[i].split(" ").map((e) => Number(e));
  });
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1] + dp[i][0], dp[i - 1][2] + dp[i][0]);
    dp[i][1] = Math.min(dp[i - 1][0] + dp[i][1], dp[i - 1][2] + dp[i][1]);
    dp[i][2] = Math.min(dp[i - 1][0] + dp[i][2], dp[i - 1][1] + dp[i][2]);
  }
  console.log(Math.min(...dp[n - 1]));
}

solution(n, input);
