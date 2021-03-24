/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["1 1","2 3","3 4","9 8","5 2","0 0"];

function solution(input) {
    input.pop()
    const answer = input.map(e => e.split(" ").map(e => Number(e)).reduce((a,b)=> a+b,0))
    console.log(answer.join("\n"));
}

solution(input);
