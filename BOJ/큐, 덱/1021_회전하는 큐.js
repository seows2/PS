/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["32 6","27 16 30 11 6 23"];

function solution(input) {
    const [N, M] = input[0].split(" ").map(e => Number(e));
    const targetArr = input[1].split(" ").map(e => Number(e));
    const queue = Array.from({length:N} , (_,i) => i+1);
    let ans = 0;
    for (const target of targetArr) {
        const idx = queue.indexOf(target);
        const frontDiff = Math.abs(idx);
        const backDiff = Math.abs(queue.length - idx);
        ans += Math.min(frontDiff,backDiff);
        if(frontDiff > backDiff){
            queue.unshift(...queue.splice(frontDiff, queue.length))
            queue.shift();
        } else {
            queue.push(...queue.splice(0, frontDiff))
            queue.shift();
        }
    }
    console.log(ans);
}

solution(input);
