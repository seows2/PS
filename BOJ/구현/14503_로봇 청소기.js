/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["11 10",
"7 4 0",
"1 1 1 1 1 1 1 1 1 1",
"1 0 0 0 0 0 0 0 0 1",
"1 0 0 0 1 1 1 1 0 1",
"1 0 0 1 1 0 0 0 0 1",
"1 0 1 1 0 0 0 0 0 1",
"1 0 0 0 0 0 0 0 0 1",
"1 0 0 0 0 0 0 1 0 1",
"1 0 0 0 0 0 1 1 0 1",
"1 0 0 0 0 0 1 1 0 1",
"1 0 0 0 0 0 0 0 0 1",
"1 1 1 1 1 1 1 1 1 1",];

function solution(input) {
    const [N, M] = input.shift().split(" ").map(e => Number(e));
    let [curX, curY, curDir] = input.shift().split(" ").map(e => Number(e))

    let map = input.map(e => e.split(" ").map(e => Number(e)))
    const visited = Array.from({length: N}, () => Array(M).fill(false))
    let ans = 1

    const dxy = [[-1,0], [0,1], [1,0], [0,-1]] // 북,동,남,서
    visited[curX][curY] = true

    while (true) {
        const temp = curDir;
        let isCleaing = false; // 청소를 했는지
        for (let i = temp+3; i >= temp; i--) {
            //현재 방향 기준으로 왼쪽 방향 탐색
            let dir = i % 4;
            const [rx, ry] = dxy[dir];
            const dx = curX + rx;
            const dy = curY + ry;

            if(dx >= 0 && dx < N-1 && dy >= 0 && dy < M-1 && !visited[dx][dy] && map[dx][dy] !== 1){
                //console.log(dir, dx, dy);
                curDir = dir; // 현재 방향 전환
                //그 방향에 청소를 하지 않았다면?
                curX = dx;
                curY = dy
                visited[dx][dy] = true // 청소
                isCleaing = true;
                ans++;
                break;
            }
        }

        if(!isCleaing){

            const [rx, ry] = dxy[curDir];
            //현재 방향 후진
            const dx = curX - rx;
            const dy = curY - ry;

            if(map[dx][dy] === 1){
                break;
            }
            curX = dx;
            curY = dy;
        }
    }

    console.log(ans);
}

solution(input);
