/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10", "1 5 2 1 4 3 4 5 2 1"];
const n = input.shift()
function solution(n, input) {
    const arr = input[0].split(" ").map(e => Number(e))
    let dp = new Array(n).fill(0)
    let rdp = new Array(n).fill(0)
    let answer = 0

    for (let i = 0; i < n; i++) {
        let temp = 0
        for (let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) temp = Math.max(temp, dp[j])
        }
        dp[i] = temp+1
    }
    for (let i = n; i >= 0; i--) {
        let temp = 0
        for (let j = n; j > i; j--) {
            if(arr[i] > arr[j]) temp = Math.max(temp, rdp[j])
        }
        rdp[i] = temp+1 
    }
    for (let i = 0; i < n; i++) {
      if(answer < dp[i]+rdp[i]-1){
          answer = dp[i]+rdp[i]-1
      }
    }
    console.log(answer);
}

solution(Number(n),input);
