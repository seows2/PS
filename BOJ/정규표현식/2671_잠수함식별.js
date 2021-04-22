/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
*/

const input = "100000000001101";

function solution(input) {
    const regex = new RegExp(/^(100+1+|01)+$/);
    console.log(regex.test(input) ? "SUBMARINE" : "NOISE");
}

solution(input);
