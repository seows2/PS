/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4","3 5 2 7"];
const n = input.shift()
function solution(n, input) {
    const arr = input[0].split(" ").map(e=>Number(e))
    const stack = []
    const answer = []
    for (let i = n-1; i >= 0; i--) {
       while (stack.length > 0 && stack[stack.length-1] < arr[i]) {
           stack.pop()
        }
       if(stack.length === 0){
           answer[i] = -1
       } else {
           answer[i] = stack[stack.length-1]
       }
       stack.push(arr[i])
    }
    console.log(answer.join(" "));
}

solution(Number(n), input);
