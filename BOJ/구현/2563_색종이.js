/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3","3 7","15 7","5 2"];

function solution(input) {
    const N = Number(input.shift())
    const papers = input.map(e => e.split(" ").map(e => Number(e)));
    const map = Array.from({length : 100}, () => Array(100).fill(0));
    let cnt = 0

    for (const [x, y] of papers) {
        for (let i = x; i < x+10; i++) {
           for (let j = y; j < y+10; j++) {
               if(map[i][j] === 1) continue;

               map[i][j] = 1;
               cnt++;
           }
        }
    }

    console.log(cnt);
}

solution(input);
