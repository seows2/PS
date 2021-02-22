const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e=> Number(e));

//const input = [6,100,100,1,1,100,100];
const n = input.shift()

function solution(n,input) {
  let dp = new Array(n).fill(0)
  dp[0] = input[0]
  dp[1] = Math.max(input[0] + input[1], input[1]);
  dp[2] = Math.max(dp[0]+input[2], input[1]+input[2],dp[1])
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i-2]+input[i], dp[i-3]+input[i-1]+input[i],dp[i-1])
    }
  console.log(dp[n-1]);
}

solution(n,input);

