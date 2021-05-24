/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "1.0 1.0", "2.0 2.0", "2.0 4.0"];

function solution(input) {
    const getDistance = (star1, star2) => {
        const [s1x, s1y] = star1;
        const [s2x, s2y] = star2;

        return Number(Math.sqrt(Math.pow(Math.abs(s1x - s2x), 2) + Math.pow(Math.abs(s1y - s2y), 2)).toFixed(2));
    }
    const makeLink = (n, stars) => {
        const link = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                link.push([i, j, getDistance(stars[i], stars[j])])
            }
        }
        return link
    }
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
    const n = Number(input.shift());
    const stars = input.map(e => e.split(" ").map(e => Number(e)));
    const link = makeLink(n, stars).sort((a, b) => a[2] - b[2]);
    const parent = Array.from({ length: n + 1 }, (_, i) => i)
    let isCycle = false;
    let answer = 0;
    link.forEach(([from, to, value]) => {
        merge(from, to);
        if (isCycle) answer += value;
    })
    console.log(answer);
}

solution(input);
