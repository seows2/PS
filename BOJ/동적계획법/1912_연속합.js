/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10", "10 -4 3 1 5 6 -35 12 21 -1"];
const n = input.shift()

function solution(n, input) {
    const arr = input[0].split(" ").map(e => Number(e))
    console.log(n, arr );
}

solution(Number(n), input);
