/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["13",
    "but",
    "i",
    "wont",
    "hesitate",
    "no",
    "more",
    "no",
    "more",
    "it",
    "cannot",
    "wait",
    "im",
    "yours",];

function solution(input) {
    input.shift()
    input.sort((a,b) => a.length - b.length || a.localeCompare(b))
    const set = new Set(input)
    console.log([...set].join("\n"));
}

solution(input);
