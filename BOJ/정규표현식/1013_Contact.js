/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4", "10010111", "011000100110001", "0110001011001", "10000110001"];

function solution(input) {
    const isCorrect = (string) => {
        const regex = new RegExp(/^(100+1+|01)+$/);

        return regex.test(string) ? "YES" : "NO"
    }
    const T = Number(input.shift());
    const answer = input.map(string => isCorrect(string)).join("\n");
    console.log(answer);
}

solution(input);
