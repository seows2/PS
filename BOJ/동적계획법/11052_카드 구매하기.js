/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10", "1 1 2 3 5 8 13 21 34 55"];

function solution(input) {
    const N = Number(input[0]);
    const card = input[1].split(" ").map(e => Number(e));
    const dp = Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + card[j - 1])
        }
    }
    console.log(dp[N]);
}

solution(input);
