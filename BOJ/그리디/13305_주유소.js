/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4", "2 3 1", "5 2 4 1"];

function solution(input) {
    const N = Number(input[0]);
    const cityDist = input[1].split(" ").map(e => Number(e));
    const gasCost = input[2].split(" ").map(e => Number(e));

    let totalCost = 0n;
    let minCost = gasCost[0];

    for (let i = 0; i < N - 1; i++) {
        if (gasCost[i] < minCost) {
            minCost = gasCost[i];
        }

        totalCost += BigInt(minCost * cityDist[i]);
    }
    console.log(totalCost.toString());
    return totalCost;
}

solution(input);
