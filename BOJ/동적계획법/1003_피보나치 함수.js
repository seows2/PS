/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [3, 0, 1, 3];
input.shift();
function solution(t) {
  let answer = "";
  const max = Math.max(...t);
  const dp = [];
  dp[0] = [1, 0];
  dp[1] = [0, 1];
  for (let i = 2; i < max + 1; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }
  t.forEach((e) => {
    console.log(dp[e].join(" "));
  });
}

solution(input);
