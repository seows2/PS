/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "4", "7", "10"];

function solution(input) {
    const setCount = () => {
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        for (let i = 4; i < 12; i++) {
            dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
        }
    }
    input.shift();
    const dp = Array(12).fill(0);
    setCount();
    const answer = input.map(e => dp[e])
    console.log(answer.join("\n"));

}

solution(input);
