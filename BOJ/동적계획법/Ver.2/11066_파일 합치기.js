/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["2", "4", "40 30 30 50", "15", "1 21 3 4 5 35 5 4 3 5 98 21 14 17 32"];

function solution(input) {
    const T = Number(input.shift());
    const answer = [];
    for (let i = 0; i < T; i++) {
        const K = Number(input.shift());
        const dp = Array.from({ length: K + 1 }, () => Array(K + 1).fill(0));
        const sizeOfFiles = input.shift().split(" ").map(e => Number(e));
        const preSum = [0];
        for (let i = 1; i <= K; i++) {
            preSum[i] = preSum[i - 1] + sizeOfFiles[i - 1];
        }
        for (let i = 2; i <= K; i++) {
            for (let j = 1; j < K + 2 - i; j++) {
                let result = [];
                for (let k = 0; k < i - 1; k++) {
                    result.push(dp[j][j + k] + dp[j + k + 1][i + j - 1])
                }
                dp[j][i + j - 1] = Math.min(...result) + (preSum[i + j - 1] - preSum[j - 1]);
            }
        }
        answer.push(dp[1][K]);
    }
    console.log(answer.join("\n"));
}

solution(input);
