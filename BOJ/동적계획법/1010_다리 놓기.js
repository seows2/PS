/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "2 2", "1 5", "13 29"];

function solution(input) {
    const getAnswer = (N, M) => {
        const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
        for (let i = 0; i <= M; i++) {
            dp[1][i] = i
        }
        for (let i = 2; i <= N; i++) {
            for (let j = i; j <= M; j++) {
                for (let k = j; k >= i; k--) {
                    dp[i][j] = dp[i][j] + dp[i - 1][k - 1];
                }
            }
        }
        return dp[N][M];
    }
    const T = Number(input.shift());
    const answer = [];
    for (let test = 0; test < T; test++) {
        const [N, M] = input.shift().split(" ").map(e => Number(e));
        answer.push(getAnswer(N, M));
    }
    console.log(answer.join("\n"));
}

solution(input);
