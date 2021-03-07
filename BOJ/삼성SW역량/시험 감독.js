/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3","3 4 5","2 2"];

function solution(input) {
    const n = input.shift()
    const [main, sub] = input[1].split(" ").map(e => Number(e))
    const exam = input[0].split(" ").map(e => Number(e)-main)
    let answer = Number(n)

    exam.forEach(e => {
        if(e > 0){
            answer += Math.ceil(e / sub)
        }
    });
    console.log(answer);
}

solution(input);
