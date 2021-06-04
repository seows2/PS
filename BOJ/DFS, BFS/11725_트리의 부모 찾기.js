/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7","1 6","6 3","3 5","4 1","2 4","4 7"];

function solution(input) {
    const makeGraph = (N, arr) => {
        const graph = Array.from({length:N} , () => []);
        arr.forEach(([from, to]) => {
            graph[from-1].push(to-1);
            graph[to-1].push(from-1);
        })
        return graph;
    }
    const dfs = (start) => {
        visited[start] = true;
        
        graph[start].forEach(next => {
            if(!visited[next]){
                answer[next] = start;
                dfs(next)
            }
        })
    }
    const N = Number(input.shift());
    const arr = input.map(e => e.split(" ").map(e => Number(e)));
    const graph = makeGraph(N, arr);
    const visited = new Array(N).fill(false);
    const answer = new Array(N).fill(-1);
    dfs(0);
    answer.shift()
    console.log(answer.map(e => e+1).join("\n"));
    
}

solution(input);
