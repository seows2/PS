/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10", "10 -4 3 1 5 6 -35 12 21 -1"];
const n = input.shift()

function solution(n, input) {
    const arr = input[0].split(" ").map(e => Number(e))
    let dp = Array(n).fill(0)
    dp[0] = arr[0]
   
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1]+arr[i], arr[i])
    }
    console.log(Math.max(...dp));
}

solution(Number(n), input);
