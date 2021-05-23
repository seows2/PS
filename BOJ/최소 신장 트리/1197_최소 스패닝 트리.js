/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3 3", "1 2 1", "2 3 2", "1 3 3"];

//크루스칼
function solution(input) {
    const find = (u) => {
        if (u === parent[u]) return u;

        return parent[u] = find(parent[u]);
    }
    const merge = (u, v) => {
        isCycle = false;
        u = find(u);
        v = find(v);

        if (u === v) return;

        parent[u] = v;
        isCycle = true;
    }
    const [V, E] = input.shift().split(" ").map(e => Number(e));
    const parent = Array.from({ length: V + 1 }, (_, i) => i);
    const arr = input.map(e => e.split(" ").map(e => Number(e))).sort((a, b) => a[2] - b[2]);
    let isCycle = false;
    let answer = 0;

    arr.forEach(([from, to, value]) => {
        merge(from, to);
        if (isCycle) answer += value;
    })
    console.log(answer);

}

solution(input);
