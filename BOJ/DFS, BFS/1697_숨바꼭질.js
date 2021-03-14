/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5 17"];

function solution(input) {
    const [N, K] = input[0].split(" ").map(e => Number(e))
    const place = Array(100001).fill(-1)
    const diff = [1,-1, 2]
    const queue = []

    if(N === K) {
        console.log("0");
        return
    }
    queue.push(N)
    place[N] = 0
    
    while (queue.length) {
        const cur = queue.shift()
        for (let i = 0; i < 3; i++) {
            const dx= diff[i]
            let temp = cur
            if(dx === 2){
                temp *= dx
            } else {
                temp += dx
            }
            if(temp === K){
                console.log(place[cur]+1);
                return
            }
            if(temp < 0 || temp > 100000 || place[temp] !== -1) continue

            place[temp] = place[cur]+1
            queue.push(temp)
        }
    }
}

solution(input);
