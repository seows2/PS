/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "8", "0 0", "7 0", "100", "0 0", "30 50", "10", "1 1", "1 1"];

function solution(input) {
    const isVaild = (x, y, n) => {
        if (x >= 0 && x < n && y >= 0 && y < n) return true;

        return false;
    }

    const bfs = (n, from, to) => {
        let map = Array.from({ length: n }, () => Array(n).fill(Infinity));
        const [fromX, fromY] = from.split(" ").map(e => Number(e));
        const [toX, toY] = to.split(" ").map(e => Number(e));
        const queue = [[fromX, fromY, 1]]
        map[fromX][fromY] = 0

        while (queue.length) {
            const [curX, curY, cnt] = queue.shift();
            if (curX === toX && curY === toY) break;
            dxy.forEach(([dx, dy]) => {
                const tx = curX + dx;
                const ty = curY + dy;
                if (isVaild(tx, ty, n) && map[tx][ty] > cnt) {
                    map[tx][ty] = cnt;
                    queue.push([tx, ty, cnt + 1])
                }
            })
        }
        return map[toX][toY];
    }
    const dxy = [[2, 1], [2, -1], [1, -2], [1, 2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
    const T = Number(input.shift());
    const answers = [];
    for (let i = 0; i < T; i++) {
        const n = Number(input.shift());
        const from = input.shift();
        const to = input.shift();
        const answer = bfs(n, from, to);
        answers.push(answer)
    }
    console.log(answers.join("\n"));
}

solution(input);
