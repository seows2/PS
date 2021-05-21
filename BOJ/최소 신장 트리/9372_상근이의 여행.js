/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["2", "3 3", "1 2", "2 3", "1 3", "5 4", "2 1", "2 3", "4 3", "4 5"];

function solution(input) {
    const makeGraph = (N, arr) => {
        const graph = Array.from({ length: N }, () => []);
        arr.forEach(([from, to]) => {
            graph[from - 1].push(to - 1);
            graph[to - 1].push(from - 1);
        })
        return graph;
    }
    const bfs = (N, graph) => {
        const visited = Array(N).fill(false);
        let answer = 0;
        const queue = [0];
        visited[0] = true;

        while (queue.length) {
            const curPos = queue.shift();
            graph[curPos].forEach(nextPos => {
                if (!visited[nextPos]) {
                    visited[nextPos] = true;
                    queue.push(nextPos);
                    answer++;
                }
            })
        }
        return answer;
    }
    const T = Number(input.shift());
    const answers = [];
    for (let i = 0; i < T; i++) {
        const [N, M] = input.shift().split(" ").map(e => Number(e));
        const arr = input.splice(0, M).map(e => e.split(" ").map(e => Number(e)));
        const graph = makeGraph(N, arr);
        const answer = bfs(N, graph);
        answers.push(answer)
    }
    console.log(answers.join("\n"));
}

solution(input);
