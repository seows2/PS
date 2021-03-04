/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5","01101","01101","11100","00011","00100"];
const n = input.shift()
function solution(n, input) {
    const graph = input.map(e => e.split(""))
    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]
    let visited = Array.from ({length:n}, () => new Array(n).fill(false))
    let posts = []
    const answer = []
    let postNum = 0

    const bfs = (i,j, graph, postNum) => {
        const queue = [[i,j]]
        visited[i][j] = true
        posts[postNum] = 1

        while (queue.length) {
            const [i, j] = queue.shift()
            dxy.forEach(([dx, dy]) => {
                let nx = i + dx
                let ny = j + dy

                if(nx >= 0 && ny >= 0 && nx < n && ny < n){
                    if(graph[nx][ny] === "1" && !visited[nx][ny]){
                        queue.push([nx, ny])
                        visited[nx][ny] = true
                        posts[postNum]++
                    }
                }
            })
        }
   }

   for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
          if(graph[i][j] === "1" && !visited[i][j]){
              bfs(i, j, graph, postNum)
              postNum++
          }
       }
   }
   posts.sort((a,b) => a-b).unshift(posts.length)
   console.log(posts.join("\n"));
}

solution(Number(n),input);
