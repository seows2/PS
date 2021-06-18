/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["1", "2"];

function solution(input) {
    const isPrime = (num) => {
        if(num === 1) return false;
        const end = Math.floor(Math.sqrt(num));

        for(let i = 2; i <= end; i++) {
            if(num % i === 0) return false;
        }

        return true;
    }
    const start = Number(input[0]);
    const end = Number(input[1]);

    const primes = [];
    for (let num = start; num <= end; num++) {
        if(isPrime(num)) primes.push(num);
    }
    if(primes.length === 0) {
        console.log("-1");
        return;
    }

    const sum = primes.reduce((a,b) => a+b , 0);
    const min = Math.min(...primes)

    console.log([sum, min].join("\n"));
}

solution(input);
