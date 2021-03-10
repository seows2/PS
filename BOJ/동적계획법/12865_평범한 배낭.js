/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 7","6 13","4 8","3 6","5 12"];

function solution(input) {
    const [n, k] = input.shift().split(" ").map(e => Number(e))
    const item = input.map(e => e.split(" ").map(e => Number(e)))
    const dp = Array.from({length:n+1}, () => new Array(k+1).fill(0))

    for (let i = 1; i <= n; i++) {
        const weight = item[i-1][0]
        const value = item[i-1][1]
        for (let j = 1; j <= k; j++) {
           if(j < weight) {
               dp[i][j] = dp[i-1][j]
           } else {
               dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight] + value)
           }
        }
    }
    console.log(dp[n][k]);
}

solution(input);
