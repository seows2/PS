/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["15",
    "AFC",
    "AAFC",
    "AAAFFCC",
    "AAFCC",
    "BAFC",
    "QWEDFGHJMNB",
    "DFAFCB",
    "ABCDEFC",
    "DADC",
    "SDFGHJKLQWERTYU",
    "AAAAAAAAAAAAABBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCDDDDDDDDDDDEEEEEEEEEEEEEEEFFFFFFFFC",
    "AAAFFFFFBBBBCCCAAAFFFF",
    "ABCDEFAAAFFFCCCABCDEF",
    "AFCP",
    "AAFFCPP"];

function solution(input) {
    const isCorrect = (string) => {
        const regex = new RegExp(/^[A-F]?A+F+C+[A-F]?$/);
        return regex.test(string) ? "Infected!" : "Good";
    }
    const T = input.shift();
    const answer = input.map(string => isCorrect(string)).join("\n");
    console.log(answer);
}

solution(input);
