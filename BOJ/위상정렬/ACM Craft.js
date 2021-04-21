/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "2",
    "4 4",
    "10 1 100 10",
    "1 2",
    "1 3",
    "2 4",
    "3 4",
    "4",
    "8 8",
    "10 20 1 5 8 7 1 43",
    "1 2",
    "1 3",
    "2 4",
    "2 5",
    "3 6",
    "5 7",
    "6 7",
    "7 8",
    "7"
];

function solution(input) {
    const T = input.shift();
    for (let test = 0; test < 1; test++) {
        const [N, K] = input.shift().split(" ").map(e => Number(e));
        const buildTime = input.shift().split(" ").map(e => Number(e));
        const buildOrder = input.splice(0, K).map(e => e.split(" ").map(e => Number(e)));
        const vitoryBuilding = Number(input.shift());

        console.log(N, K, buildTime, buildOrder, vitoryBuilding);

    }
}

solution(input);
