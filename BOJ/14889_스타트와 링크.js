/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/
const input = ["4", "0 1 2 3", "4 0 5 6", "7 1 0 2", "3 4 5 0"]

const N = input.shift()
const map = input.map(line => line.split(" "))

function solution(N, map) {
    console.log(N, map);
}

solution(N,map)