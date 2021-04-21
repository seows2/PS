/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 10", "1", "2", "5"];

function solution(input) {
    const [n, k] = input.shift().split(" ").map(e => Number(e));
    const coin = input.map(e => Number(e));
    const dp = Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = coin[i]; j <= k; j++) {
            dp[j] += dp[j - coin[i]];
        }
    }
    console.log(dp[dp.length - 1]);
}

solution(input);
