/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7","6","1 2","2 3","1 5","5 2","5 6","4 7"];

function solution(input) {
    const numberOfNode = Number(input.shift())
    const numberOfEdge = Number(input.shift())
    const link = input.map(e => e.split(" ").map(e => Number(e)))
    const bfsResult = []

    const makeGraph = (numberOfNode, link) => {
        let graph = Array.from ({length:numberOfNode}, () => new Array(numberOfNode).fill(0))
        link.forEach(([from, to]) => {
            graph[from-1][to-1] = 1
            graph[to-1][from-1] = 1
        })
        return graph
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

    const graph = makeGraph(numberOfNode, link)
    const bfsRoute = bfs(1,graph,numberOfNode)

    console.log(bfsRoute.length-1);
}

solution(input);
