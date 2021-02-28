/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5","3 1 4 3 2"];
const n = input.shift()

function solution(n,input) {
    let arr = input[0].split(" ").map(e=>Number(e)).sort((a,b)=>a-b)
    for (let i = 1; i < n; i++) {
        arr[i] = arr[i-1] + arr[i]
    }
   console.log(arr.reduce((a,b) => a+b,0)); 

}

solution(Number(n), input);
