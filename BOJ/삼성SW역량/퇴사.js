/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10","1 1","1 2","1 3","1 4","1 5","1 6","1 7","1 8","1 9","1 10"];
const n = input.shift()
function solution(n, input) {
    let today = []
    let pay = []
    input.forEach(e => {
        const [d, p] = e.split(" ").map(e => Number(e))
        today.push(d)
        pay.push(p)
    }) 
    
    let dp = new Array(n+1).fill(0)

    for (let i = n-1; i >= 0; i--) {
        let day = i + today[i]
        if(day-1 >= n){
            dp[i] = dp[i+1] 
        } else {
            dp[i] = Math.max(pay[i]+dp[day], dp[i+1])
        }
    }
    console.log(dp[0]);
}

solution(Number(n), input);
