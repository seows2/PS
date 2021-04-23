/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 1", "1 2"];

function solution(input) {
    const [N, M] = input.shift().split(" ").map(e => Number(e));
    const arr = input.map(e => e.split(" ").map(e => Number(e)));

    const makeGraph = (N, arr) => {
        const graph = Array.from({ length: N }, () => []);
        arr.forEach(([from, to]) => {
            graph[from - 1].push(to - 1);
            graph[to - 1].push(from - 1);
        })
        return graph;
    }
    const dfs = (i, graph, visited) => {
        const queue = [i];

        while (queue.length) {
            const cur = queue.shift();
            graph[cur].forEach(nextV => {
                if (!visited[nextV]) {
                    visited[nextV] = true;
                    queue.push(nextV)
                }
            })
        }
    }
    const graph = makeGraph(N, arr);
    const visited = Array(N).fill(false);
    let cnt = 0
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true
            dfs(i, graph, visited)
            cnt++;
            console.log(visited);
        }
    }
    console.log(cnt);
    return cnt
}

solution(input);
