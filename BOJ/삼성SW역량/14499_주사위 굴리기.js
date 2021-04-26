/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 3 1 1 9", "1 2 3", "4 0 5", "6 7 8", "1 3 2 2 4 4 1 1 3"];

function solution(input) {
    const roll = (dice, dir) => {
        const temp0 = dice[0];
        const temp1 = dice[1];
        const temp2 = dice[2];
        const temp3 = dice[3];
        const temp4 = dice[4];
        const temp5 = dice[5];
        if (dir === 1) {
            //동
            dice[0] = temp3;
            dice[2] = temp0;
            dice[5] = temp2;
            dice[3] = temp5;
            return dice;
        }
        if (dir === 2) {
            //서
            dice[0] = temp2;
            dice[2] = temp5;
            dice[5] = temp3;
            dice[3] = temp0;
            return dice;
        }
        if (dir === 3) {
            //남

            dice[0] = temp1;
            dice[4] = temp0;
            dice[5] = temp4;
            dice[1] = temp5;
            return dice;
        }
        if (dir === 4) {
            //북
            dice[5] = temp1;
            dice[4] = temp5;
            dice[0] = temp4;
            dice[1] = temp0;
            return dice;
        }
        return dice;
    }

    const isPossible = (dir, curX, curY, N, M) => {
        const dx = curX + dxy[dir - 1][0];
        const dy = curY + dxy[dir - 1][1];
        if ((dy < 0 || dy >= M) || (dx < 0 || dx >= N)) {
            return false
        }
        return true

    }
    const [N, M, x, y, K] = input.shift().split(" ").map(e => Number(e));
    const order = input.pop().split(" ").map(e => Number(e));
    let map = input.map(e => e.split(" ").map(e => Number(e)));
    const dxy = [[0, 1], [0, -1], [-1, 0], [1, 0]] // 동서북남  
    let curX = x;
    let curY = y;
    /**
     *   2
     * 4 1 3
     *   5
     *   6
     */
    let dice = Array(6).fill(0);
    const answer = [];
    for (const dir of order) {
        if (!isPossible(dir, curX, curY, N, M)) continue;
        curX = curX + dxy[dir - 1][0];
        curY = curY + dxy[dir - 1][1];
        dice = roll(dice, dir);
        const curValue = map[curX][curY];
        if (curValue === 0) {
            map[curX][curY] = dice[5];
        } else {
            dice[5] = curValue;
            map[curX][curY] = 0;
        }
        answer.push(dice[0]);
    }
    console.log(answer.join("\n"));
}

solution(input);
