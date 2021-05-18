/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5 7", "20 15 10 17"];

function solution(input) {
    const check = (mid, M, treeHeights) => {
        let sum = 0;
        for (const height of treeHeights) {
            if (height <= mid) continue;
            const remain = height - mid;
            sum += remain
        }

        if (sum >= M) return true;

        return false;
    }
    const [N, M] = input[0].split(" ").map(e => Number(e));
    const treeHeights = input[1].split(" ").map(e => Number(e));
    let left = 0;
    let right = Number.MAX_SAFE_INTEGER;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (check(mid, M, treeHeights)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(right);
}

solution(input);
