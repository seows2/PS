/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 3", "1 2 1", "2 3 2", "1 3 3"];

function solution(input) {
    const makeGraph = (V, arr) => {
        const graph = Array.from({ length: V }, () => []);
        arr.forEach(([from, to, value]) => {
            graph[from - 1].push([to - 1, value]);
            graph[to - 1].push([from - 1, value]);
        })
        return graph;
    }
    const [V, E] = input.shift().split(" ").map(e => Number(e));
    const arr = input.map(e => e.split(" ").map(e => Number(e)));
    const graph = makeGraph(V, arr);
    console.log(graph);

}

solution(input);
