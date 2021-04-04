/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4", "RDD","4","[1,2,3,4]","DD","1","[42]","RRD","6","[1,1,2,3,5,8]","D","0","[]"];

function solution(input) {
    const T = Number(input.shift());
    for (let i = 0; i < T; i++) {
        const [P, N, arr] = input.splice(0, 3);

    }
}

solution(input);
