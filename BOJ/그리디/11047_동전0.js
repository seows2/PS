/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10 4790","1","5","10","50","100","500","1000","5000","10000","50000"];
const info = input.shift()
function solution(info, money) {
    const [n, k] = info.split(" ").map(e => Number(e))
    const m = money.map(e=> Number(e))
    let cnt = 0
    let temp = k
    for (let i = n-1; i >= 0; i--) {
        while (true) {
            if(temp >= m[i]){
                temp -= m[i]
                cnt++
            } else {
                break
            }
        }
    }
    console.log(cnt);
}

solution(info, input);
