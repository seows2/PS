/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5 6","1","5 1 1","1 2 2","1 3 3","2 3 4","2 4 5","3 4 6"];

function solution(input) {
    const dijkstra = (graph) => {
        const dist = Array(V).fill(Infinity);
        const visited = Array(V).fill(false)
        const queue = [];
        queue.push(K-1);
        dist[K-1] = 0;

        while (queue.length) {
            const cur = queue.sort((a, b) => dist[b] - dist[a]).pop()
            if (visited[cur]) continue;
            visited[cur] = true;

            graph[cur].forEach(([next, w]) => {
                const temp = dist[cur] + w
                if (dist[next] > temp) {
                    dist[next] = temp;
                    queue.push(next);
                  }
            })
        }
       dist.forEach((e,i) =>{
            if(e === Infinity){
                dist[i] = "INF"
            }
        })
        return dist;
    }
    const [V, _] = input.shift().split(" ").map(e => Number(e))
    const K = Number(input.shift())
    const graph = Array.from({ length: V }, () => []);
    input.forEach(e => {
        const [a, b, w] = e.split(" ").map(e => Number(e))
        graph[a - 1].push([b - 1, w]);
    });
    console.log(graph);
    const answer = dijkstra(graph)
    console.log(answer.join("\n"));
}

solution(input);
