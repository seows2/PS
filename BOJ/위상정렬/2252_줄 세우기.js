/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 3", "1 3", "2 3", "1 2"];

function solution(input) {
    const makeGraph = (numberOfNode, arr) => {
        let graph = Array.from({ length: numberOfNode }, () => []);
        arr.forEach(([from, to]) => {
            graph[from - 1].push(to - 1)
            cntOfLink[to - 1]++;
        })
        return graph
    }
    const topologicalSort = (graph, cntOfLink) => {
        const queue = [];
        const answer = [];
        for (let i = 0; i < N; i++) {
            if (cntOfLink[i] === 0) queue.push(i);
        }
        while (queue.length) {
            const cur = queue.shift();
            answer.push(cur);
            graph[cur].forEach(nextV => {
                cntOfLink[nextV]--;
                if (cntOfLink[nextV] === 0) queue.push(nextV)
            })
        }

        return answer.map(e => e + 1);
    }
    const [N, M] = input.shift().split(" ").map(e => Number(e));
    const heightInfo = input.map(e => e.split(" ").map(e => Number(e)));
    const cntOfLink = Array(N).fill(0);
    const graph = makeGraph(N, heightInfo);
    const answer = topologicalSort(graph, cntOfLink)

    console.log(answer.join(" "));

}

solution(input);
