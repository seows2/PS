/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["1","3 3 3"];

function solution(input) {
    const T = input.shift()
    const answer = []
    for (let i = 0; i < T; i++) {
        const [H, W, N] = input[i].split(" ")
        const floor = N % H === 0 ? H : N % H
        const remain = String(Math.ceil(N / H)).length === 2 ? String(Math.ceil(N / H)) : "0"+Math.ceil(N / H)
        answer.push(floor+remain);
    }
    console.log(answer.join("\n"));
}

solution(input);
