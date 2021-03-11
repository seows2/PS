/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "4 6",
    "101111",
"101010",
"101011",
"111011"
];

function solution(input) {
    const bfs = (startX, startY) => {
        let visited = Array.from({length: miro.length}, () => Array(miro[0].length).fill(false))
        const queue = [[startX, startY]]
        visited[startX][startY] = true
        
        while (queue.length) {
            const [curX, curY] = queue.shift()
            bfsResult.push([curX, curY])

            dxy.forEach(([dx, dy]) => {
                const nx = curX+dx
                const ny = curY+dy

                if(nx >= 0 && ny >= 0 && nx < n && ny < m){
                    if(miro[nx][ny] === 1 && !visited[nx][ny]){
                        queue.push([nx, ny])
                        cnt[nx][ny] = cnt[curX][curY]+1
                        
                        //path[nx][ny] ? path[nx][ny].push([curX, curY]) : path[nx][ny] = [curX, curY]
                        visited[nx][ny] = true
                    }
                }
            })
        }

    }
    const [n, m] = input.shift().split(" ").map(e => Number(e))
    const miro = input.map(e => e.split("").map(e => Number(e)))
    const cnt = Array.from({length: miro.length}, () => Array(miro[0].length).fill(0))
    //const path = Array.from({length: miro.length}, () => Array(miro[0].length))

    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]
    const bfsResult = []

    bfs(0,0)
    console.log(cnt[n-1][m-1]);
    //console.log(path);
}

solution(input);
