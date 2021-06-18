/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "2 3 1"];

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map((num) => Number(num));
    const sortedA = JSON.parse(JSON.stringify(A)).sort((a,b) => a-b);

    const answer = [];
    for (const num of A) {
        const idx = sortedA.indexOf(num)
        answer.push(idx);
        sortedA[idx] = -1;
    }
    console.log(answer.join(" "));
    

}

solution(input);
