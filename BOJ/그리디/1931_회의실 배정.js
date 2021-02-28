/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["11","1 4","3 5","0 6","5 7","3 8","5 9","6 10","8 11","8 12","2 13","12 14"];
const n = input.shift()
function solution(_, input) {
    const arr = input.map(e => e.split(" ").map(e => Number(e))).sort((a,b) => a[1]-b[1] || a[0]-b[0])
    let curTime = 0
    let cnt = 0
    arr.forEach(e => {
        if(curTime <= e[0]){
            cnt++
            curTime = e[1]
        }
    });
    console.log(cnt);
}

solution(Number(n), input);
