/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5","3 4","1 5","4 2","2 3","5"];
const n = input.shift()
function solution(n, input) {
    const link = input.map(e => e.split(" ").map(e => Number(e))).sort((a,b)=> a[0]-b[0])
    const to = link.map(([_,a]) => a)
    let dp = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        let temp = 0
        for (let j = 0; j < i; j++) {
            if(to[i] > to[j]) temp = Math.max(temp, dp[j])
        }
        dp[i] = temp+1
    }

    console.log(n-Math.max(...dp));
}

solution(Number(n), input);
