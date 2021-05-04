/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "2",
    "3",
    "hat headgear",
    "sunglasses eyewear",
    "turban headgear",
    "3",
    "mask face",
    "sunglasses face",
    "makeup face"
];

function solution(input) {
    const t = Number(input.shift());

    for (let i = 0; i < t; i++) {
        const n = input.shift();
        const clothes = input.splice(0, n).map(e => e.split(" "));
        const clothesObj = {};
        let answer = 1;
        for (const [_, type] of clothes) {
            clothesObj[type] = clothesObj[type] ? clothesObj[type] + 1 : 2;
        }
        Object.values(clothesObj).forEach(e => {
            answer *= e;
        });
        console.log(answer - 1);
    }
}

solution(input);
