/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["6", "1000 999 1000 999 1000 999"];

function solution(input) {
    const N = input[0];
    const nums = input[1].split(" ").map(e => Number(e))
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const obj = {}
    const answer = [];
    let key = 0;
    sortedNums.forEach(num => {
        if (obj[num] !== undefined) return;
        obj[num] = key;
        key++;
    })
    nums.forEach(num => answer.push(obj[num]));
    console.log(answer.join(" "));
}

solution(input);
