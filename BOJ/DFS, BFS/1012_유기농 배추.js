/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["2","10 8 17","0 0","1 0","1 1","4 2","4 3","4 5","2 4","3 4","7 4","8 4","9 4","7 5","8 5","9 5","7 6","8 6","9 6","10 10 1","5 5"];

function solution(input) {
    let visited = []
    const bfs = (i,j, graph, m, n) => {
        const queue = [[i,j]]
        visited[i][j] = true
        
        while (queue.length) {
            const [i, j] = queue.shift()
            dxy.forEach(([dx, dy]) => {
                let nx = i + dx
                let ny = j + dy

                if(nx >= 0 && ny >= 0 && nx < m && ny < n){
                    if(graph[nx][ny] === 1 && !visited[nx][ny]){
                        queue.push([nx, ny])
                        visited[nx][ny] = true
                    }
                }
            })
        }
    }
    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]
    const T = input.shift()
    
    for (let i = 0; i < T; i++) {
        let cnt = 0
        const [M, N, K] = input.shift().split(" ").map(e=>Number(e))
        const graph = Array.from({length: M}, () => Array(N).fill(0))
        visited = Array.from ({length:M}, () => new Array(N).fill(false))
        const arr = input.splice(0,K)
        arr.forEach((e) => {
            const [x, y] = e.split(" ")
            graph[x][y] = 1
        })

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
               if(graph[i][j] === 1 && !visited[i][j]){
                   bfs(i, j, graph, M, N)
                   cnt++
               }
            }
        }
        console.log(cnt);
        
    }
}

solution(input);
