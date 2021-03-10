/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4","3","0","4","0"];

function solution(input) {
    const K = Number(input.shift());
    const arr = input.map(e => Number(e)) 
    const stack = []

    arr.forEach(e => {
        if(e === 0){
            stack.pop()
        } else {
            stack.push(e)
        }
    })
    console.log(stack.reduce((a,b)=> a+b,0));
}

solution(input);
