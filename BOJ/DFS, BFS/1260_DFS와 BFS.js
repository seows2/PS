/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 5 1","1 2","1 3","1 4","2 4","3 4"];
function solution(input) {
    const [numberOfNode, _, start] = input.shift().split(" ").map(e=> Number(e))
    const arr = input.map(e=> e.split(" ").map(e => Number(e)))
    let visited = new Array(numberOfNode).fill(false)
    const dfsResult = []
    const bfsResult = []
    
   const dfs = (start, graph, visited, dfsResult) => {
       dfsResult.push(start)
       visited[start-1] = true

       let cur = start-1
       for (let i = 0; i < graph[0].length; i++) {
           if(graph[cur][i] === 1 && !visited[i]){
               dfs(i+1, graph, visited, dfsResult)
           }
       }
       return dfsResult
   }
   const bfs = (start, graph, numberOfNode) => {
        const queue = [start]
        let visited = new Array(numberOfNode).fill(false)
        visited[start-1] = true
        while (queue.length) {
            const cur = queue.shift()
            bfsResult.push(cur)
            graph[cur-1].forEach((e,i) =>{
                if(e === 1 && visited[i] === false){
                    visited[i] = true
                    queue.push(i+1)
                }
            })
        }
        return bfsResult;
   }
   const makeGraph = (numberOfNode, arr) => {
    let graph = Array.from({length:numberOfNode}, () =>new Array(numberOfNode).fill(0))
    arr.forEach(([from, to]) =>{
        graph[from-1][to-1] = 1;
        graph[to-1][from-1] = 1;
    })
    return graph
   }

   const graph = makeGraph(numberOfNode, arr)

   const dfsRoute = dfs(start, graph, visited, dfsResult)
   const bfsRoute = bfs(start, graph, numberOfNode)

   console.log(dfsRoute.join(" "));
   console.log(bfsRoute.join(" "));
}

solution(input);
