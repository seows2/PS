/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7 7","2 0 0 0 1 1 0","0 0 1 0 1 2 0","0 1 1 0 1 0 0","0 1 0 0 0 0 0","0 0 0 0 0 1 1","0 1 0 0 0 0 0","0 1 0 0 0 0 0"];

function solution(input) {
    const countSafe = () => {
        let safe = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if(copy[i][j] === 0) safe++
            }
        }
        return safe
    }

    const spreadVirus = (x, y) => {
        for (let i = 0; i < 4; i++) {
            const [dx, dy] = dxy[i]
            let nx = x + dx
            let ny = y + dy

            if(0 <= nx && nx < n && 0 <= ny && ny < m){
                if(copy[nx][ny] === 0){
                    copy[nx][ny] = 2
                    spreadVirus(nx, ny)
                }
            }
        }
    }

    const makeWall = (start, cnt) => {
        if(cnt === 3){
            copy = JSON.parse(JSON.stringify(map));
            virusPos.forEach(([x, y]) => {
                spreadVirus(x,y)
            })
            max = Math.max(max, countSafe())
            return
        }
        for (let i = start; i < n*m; i++) {
            let dy = Math.floor(i /m)
            let dx = i % m
            
            if(map[dy][dx] === 0){
                map[dy][dx] = 1;
                makeWall(i+1, cnt+1)
                map[dy][dx] = 0;
            }
        }
    }
    const dxy = [[1,0],[-1,0],[0,1],[0,-1]]
    const [n, m] = input.shift().split(" ").map(e => Number(e))
    const virusPos = []
    const map = input.map((e,x) => e.split(" ").map((e,y) => {
        const num = Number(e)
        if(num === 2) virusPos.push([x,y])
        return num
    }))
    let copy
    let max = -1

    makeWall(0,0)
    console.log(max);
}

solution(input);
