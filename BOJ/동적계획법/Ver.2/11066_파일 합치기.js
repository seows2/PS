/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["2","4","40 30 30 50","15","1 21 3 4 5 35 5 4 3 5 98 21 14 17 32"];

function solution(input) {
    const sum = () => {
        
    }
    const T = Number(input.shift())
    for (let i = 0; i < 1; i++) {
        const K = Number(input.shift())
        const sizeOfFiles = input.shift().split(" ").map(e => Number(e))
        console.log(sizeOfFiles);
        for (let i = 0; i < K-1; i++) {
            console.log(i);
        }
    }
}

solution(input);
