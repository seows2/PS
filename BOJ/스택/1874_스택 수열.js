/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5", "1", "2", "5", "3", "4"];

function solution(input) {
    const N = input.shift();
    const nums = input.map(e => Number(e));
    let j = 0;
    const stack = [];
    let answer = [];

    for (let i = 1; i <= N; i++) {
        stack.push(i);
        answer.push("+")

        while (stack.length && stack[stack.length - 1] === nums[j]) {
            stack.pop();
            answer.push("-");
            j++
        }
    }
    if (stack.length) console.log("NO");
    else console.log(answer.join("\n"));

}

solution(input);
