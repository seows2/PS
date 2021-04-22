/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "2",
    "4 4",
    "10 1 100 10",
    "1 2",
    "1 3",
    "2 4",
    "3 4",
    "4",
    "8 8",
    "10 20 1 5 8 7 1 43",
    "1 2",
    "1 3",
    "2 4",
    "2 5",
    "3 6",
    "5 7",
    "6 7",
    "7 8",
    "7",
];

function solution(input) {
    const makeGraph = (numberOfNode, arr, cntOfLink) => {
        let graph = Array.from({ length: numberOfNode }, () => []);
        arr.forEach(([from, to]) => {
            graph[from - 1].push(to - 1);
            cntOfLink[to - 1]++;
        })
        return graph
    }
    const topologicalSort = (graph, cntOfLink, N, buildTime, vitoryBuilding) => {
        const queue = [];
        const answer = Array(N).fill(0);
        for (let i = 0; i < N; i++) {
            if (cntOfLink[i] === 0) {
                queue.push(i);
            }
        }
        while (queue.length) {
            const cur = queue.shift();
            graph[cur].forEach(nextV => {
                answer[nextV] = Math.max(answer[nextV], answer[cur] + buildTime[cur])
                cntOfLink[nextV]--;
                if (cntOfLink[nextV] === 0) queue.push(nextV)
            })
        }
        return answer[vitoryBuilding - 1] + buildTime[vitoryBuilding - 1];
    }
    const T = input.shift();
    const answer = [];
    for (let test = 0; test < T; test++) {
        const [N, K] = input.shift().split(" ").map(e => Number(e));
        const buildTime = input.shift().split(" ").map(e => Number(e));
        const buildOrder = input.splice(0, K).map(e => e.split(" ").map(e => Number(e)));
        const vitoryBuilding = Number(input.shift());
        let cntOfLink = Array(N).fill(0);
        const graph = makeGraph(N, buildOrder, cntOfLink);
        answer.push(topologicalSort(graph, cntOfLink, N, buildTime, vitoryBuilding));
    }
    console.log(answer.join("\n"));
}

solution(input);
