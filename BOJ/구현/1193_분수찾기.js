/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "14";

function solution(input) {
    let num = Number(input);
    let cnt = 1;
    let ja = 0
    while (true) {
        if(num > cnt){
            num -= cnt;
            cnt++;
        } else {
            break
        }
    }
    if(cnt % 2 === 0){
        //위로
        ja = num
    } else {
        //아래로
        ja = cnt+1 - num
    }
    const mo = cnt+1 - ja
    console.log(`${ja}/${mo}`);
}

solution(input);
