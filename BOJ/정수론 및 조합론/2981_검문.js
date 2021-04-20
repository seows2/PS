/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "6", "34", "38"];

function solution(input) {
    const GCD = (a, b) => {
        if (a % b === 0) return b;

        return GCD(b, a % b);
    }
    const N = input.shift();
    const arr = input.map(e => Number(e)).sort((a, b) => a - b);
    const answer = [];
    let gcdValue = arr[1] - arr[0];
    for (let i = 2; i < N; i++) {
        gcdValue = GCD(gcdValue, arr[i] - arr[i - 1]);
    }
    for (let i = 2; i <= gcdValue; i++) {
        if (gcdValue % i === 0) answer.push(i);
    }
    console.log(answer.join(" "));

}

solution(input);
