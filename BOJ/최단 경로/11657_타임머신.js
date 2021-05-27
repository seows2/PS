/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 4","1 2 4","1 2 3"];

function solution(input) {
    const makeGraph = (N, arr) => {
       const graph = Array.from({length:N} , () => []);
        arr.forEach(([from, to, value]) => {
            graph[from-1].push([to-1, value]);
        })
        return graph;
    }
    const [N, M] = input.shift().split(" ").map(e => Number(e));
    const arr = input.map(e => e.split(" ").map(e => Number(e)));
    const dist = Array(N).fill(Infinity);
    const graph = makeGraph(N, arr);

    let cycle = false;
    dist[0] = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
           graph[j].forEach(([next, value]) => {
               if(dist[j] !==Infinity && dist[next] > dist[j] + value){
                   dist[next] = dist[j] + value;
                   if(i === N-1) cycle = true;
               }
           }) 
        }
    }
    if(cycle){
        console.log(-1);
        return;
    }
    const answer = dist.slice(1, dist.length).map(e => {
        if(e === Infinity) return -1;

        return e;
    })
    console.log(answer.join("\n"));

}

solution(input);
