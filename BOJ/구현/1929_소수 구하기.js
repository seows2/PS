/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "1 3";

function solution(input) {
    const [M, N] = input.split(" ").map(e => Number(e))
    const prime = Array(N+1).fill(0).map((e,i) => i)
    prime[1] = 0
    for (let i = 2; i <= N; i++) {
       if(prime[i] === 0) continue

       for (let j = i*2; j <= N; j+=i) {
            prime[j] = 0
       }
    }
    const answer = [];
    console.log(prime);
    for (let i = M; i <= N; i++) {
        if(prime[i] !== 0) answer.push(prime[i])
    }
    console.log(answer.join("\n"));
}

solution(input);
