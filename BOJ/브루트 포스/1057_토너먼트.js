/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["1000 20 31"];

function solution(input) {
    const [N, KIM, IM] = input[0].split(" ").map(e => Number(e));
    let kimIdx = KIM;
    let imIdx = IM;
    let round = 0

    while (kimIdx !== imIdx) {
        kimIdx = Math.floor((kimIdx + 1) / 2);
        imIdx = Math.floor((imIdx + 1) / 2);
        round++;

    }
    console.log(round);
}

solution(input);
