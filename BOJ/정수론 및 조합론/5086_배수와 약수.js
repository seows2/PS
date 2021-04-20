/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["8 16", "32 4", "17 5", "0 0"];

function solution(input) {
    input.pop();
    const position = ([first, second]) => {
        const firstNum = Number(first);
        const secondNum = Number(second);
        if (secondNum % firstNum === 0) return "factor"

        if (Math.floor(firstNum / secondNum) === firstNum / secondNum) return "multiple"

        return "neither"
    }

    const answer = input.map(e => position(e.split(" ")))
    console.log(answer.join("\n"));
}

solution(input);
