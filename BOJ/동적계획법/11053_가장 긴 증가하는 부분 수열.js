/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["6", "10 20 10 30 20 50"];
const n = input.shift()
function solution(n,input) {
    const arr = input[0].split(" ").map(e=>Number(e))
    let dp = new Array(n).fill(0)
    let ans = 0
    for (let i = 0; i < n; i++) {
      let temp = 0
      for (let j = 0; j < i; j++) {
          if(arr[i] > arr[j]) temp = Math.max(temp, dp[j])
      }
      dp[i] = temp+1
      ans = Math.max(ans,dp[i])
    }
    console.log(ans);
}

solution(Number(n), input);
